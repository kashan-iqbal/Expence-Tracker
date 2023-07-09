import React from 'react'
import "./app.css"

const Expenceitem = ({id,title,date,price,getId}) => {
  
 

  const year = date.getFullYear();
  console.log(year);
  const month = date.toLocaleString("en-US", { month: "short" });
  console.log(month);
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  console.log(day);
 

const editChangeHandler=()=> getId(id,'edit');

const deleteChangeHandler=()=>  getId(id, 'delete');



  return (

<li>

 <div className='date'>
   <p className='month center'>Dec</p>
   <p className='year'>2023</p>
   <p className='day center'>12</p>
 </div>

 <div className='expenctitle'>
   {title} &nbsp; - &nbsp;  ${price}
   
 
 </div>
 

 <div className='btn'>
   <button className='button edit' onClick={editChangeHandler}>Edit</button>
   <button className='button delet' onClick={deleteChangeHandler}>Delete</button>

 </div>


</li>


    
  )
}

export default Expenceitem