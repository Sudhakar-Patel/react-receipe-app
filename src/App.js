import React from 'react'
import Home from './Components/Home'
import './App.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import ReceipeId from './Components/ReceipeId'
import Category from './Components/Category'
import SearchElement from './Components/SearchElement'

const App = () => {
  return (
    <>
<Router>
  <Routes>
    <Route  path='/' element={<Home/>}/>
    <Route  path='/:idMeal' element={<ReceipeId/>}/>
    <Route  path='/category/:name' element={<Category/>}/>
    <Route  path='/search/:searchTerm' element={<SearchElement/>}/>
  </Routes>
</Router>

    
    </>
  )
}

export default App