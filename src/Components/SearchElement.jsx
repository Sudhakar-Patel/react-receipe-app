import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import TrendingSlider from './TrendingSlider'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'


const SearchElement = () => {
    // console.log(useParams())
    const  {searchTerm} =useParams();

    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
            const data = await api.json();

            setData(data.meals)
            console.log(data.meals);
            // console.log(data.meals[0].strMealThumb)

        }
        fetchData();
    }, [searchTerm])

  return (
    <>
    <Navbar/>
    
    <div className="my-5"style={{
        marginTop:'3rem',
        width:'90%',
        margin:'auto',
        display:'grid',
        gridTemplateColumns:'repeat(auto-fit,minmax(15rem,1fr))',
        gridGap:'1rem'
    }}>
    {
    data.map((d)=>{
return(
<Link to={`/${d.idMeal}`} className='link'>
    <div style={{textAlign:'center'}}>
        <div className="img my-3">
            <img src={d.strMealThumb} alt="" style={{width:'15rem'}}/>
        </div>
        <h3>{d.strMeal}</h3>
    </div>
    </Link>
)
    })
}
</div>

    <TrendingSlider/>
    </>
  )
}

export default SearchElement