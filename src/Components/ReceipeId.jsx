import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import TrendingSlider from './TrendingSlider'
import { useParams } from 'react-router-dom'

const ReceipeId = () => {

    const {idMeal} =useParams()
    // console.log(useParams())


    const [data, setData] = useState([])
    const [active, setActive] = useState('ingredient')
    // const [active1, setActive1] = useState('instruction')

    useEffect(() => {
        const fetchData = async () => {
            const api = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
            const data = await api.json();

            setData(data.meals[0])
            console.log(data.meals[0]);
            // console.log(data.meals[0].strMealThumb)

        }
        fetchData();
    }, [idMeal])

  return (
    <>
    
    <Navbar/>

<div className="container" style={{width:'90%',margin:'auto',textAlign:'center'}}>
    <h1>{data.strMeal}</h1>

    <div className="flex my-5"style={{display:'flex'}}>
<div className="img" style={{width:'30%'}}>
    <img src={data.strMealThumb} alt="" style={{width:'17rem'}} />
</div>

<div className="content" style={{width:'60%'}}>
    <button className="btn btn-warning mx-3" onClick={()=>setActive('ingredient')}>Ingredients</button>
    <button className="btn btn-warning mx-3" onClick={()=>setActive('instruction')}>Instructions</button>

{

active==='ingredient'?(
<div>
    <h3>{data.strIngredient1} - {data.strMeasure1}</h3>
    <h3>{data.strIngredient2} - {data.strMeasure2}</h3>
    <h3>{data.strIngredient3} - {data.strMeasure3}</h3>
    <h3>{data.strIngredient4} - {data.strMeasure4}</h3>
    <h3>{data.strIngredient5} - {data.strMeasure5}</h3>
    <h3>{data.strIngredient6} - {data.strMeasure6}</h3>
</div>
):(
    <div className='my-3'>
    <p>{data.strInstructions}</p>
</div> 
)
}
</div>
</div>
</div>

    <TrendingSlider/>

    </>
  )
}

export default ReceipeId