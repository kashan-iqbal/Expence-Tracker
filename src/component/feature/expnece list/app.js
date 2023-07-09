import Expenceitem from '../expnece list/expence item/app'


import React from 'react'

import "./app.css"
const Expencelist = ({list,getId}) => {
 const getIdHandler = (id,method)=> getId(id,method)
 

  return (
 
    <ul className='listcontainer'>
       {list.map((data)=> (
        <Expenceitem
        key={data.id}
        id={data.id}
        title={data.title}
        date={data.date}
        price={data.price}
        getId={getIdHandler}
        />
        
       ))}
       
    </ul>
  )
}

export default Expencelist