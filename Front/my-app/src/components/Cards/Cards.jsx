import React, { useContext } from 'react'
import MainContext from '../../context/context'
import "./Cards.scss"
import Card from '../Card/Card'

const Cards = () => {
  const {filter,handleFilter,searchHandler}=useContext(MainContext)
  return (
    <div className='umumi'>
      <div> <h1>Popular Courses</h1>
      
       <div className='bt'>
       <button onClick={(e)=>{
         handleFilter(e.target.value)
       }} class="btn">
    Sort
   </button>

   <input onChange={(e)=>{
         searchHandler(e.target.value)
       }} type="text" name="text" class="input" placeholder="Search...."></input>

       </div>

      </div>
      
       <div className='karts'>
       { filter.map((item,index)=>(
        <Card key={index} item={item}/>
       ))}
       
       </div>

    </div>
  )
}

export default Cards