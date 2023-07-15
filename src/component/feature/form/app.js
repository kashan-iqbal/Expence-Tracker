import React, { useState } from 'react'
import "./app.css"

const Form = ({getData}) => {
  const [expenceData,setExpenceData]= useState({
    title:'',
    price:'',
    date:'',

  })

// useEffect(()=>{  
//     setExpenceData({
//       title:editValues.title,
//       price:editValues.price,
//       // date:editValues.date
//     })
  
// },[editValues]
// )

// useEffect(()=>{
//   if(editValues !== null){
//     setExpenceData({
//       title:editValues.title,
//       price:editValues.price,
//       // date:editValues.date
//         })
//   }
// },[editValues]
// )



  const inputChangeHandler= (e)=>{
    setExpenceData({...expenceData, [e.target.name]:e.target.value});
  }

  const submitHandler=(e)=>{
    e.preventDefault();
    const data ={
      ...expenceData,
      id:Math.floor(Math.random()*1000),
      date:new Date(expenceData.date)

    }
    
    getData(data);
  }

  return (


    <form onSubmit={submitHandler} >
  <h3>Add Your Expences</h3>

   
  



 <div className='Sinput'>
 <label id='expenceTitle' htmlFor='expenceTitle'>Add Expence</label>

<input type='text'
  id='expenceTitle'
  placeholder='Expence Name'
  name='title'
  value={expenceData.title}
  onChange={inputChangeHandler}
  required
/>
 </div>



<div className='Sprice'>
<label id='price' htmlFor='price'>price</label>

<input type='number'
  id='price'
  name='price'
  placeholder='Price'
  value={expenceData.price}
  onChange={inputChangeHandler}
  required
/>

</div>

<div className='Sdate'>
<label htmlFor='expenceData'>Date</label>

<input type='date'
  id='expenceData'
  name='date'
  value={expenceData.date}
  onChange={inputChangeHandler}
  required
/>
</div>




  <div className='Sbutton'>
    
<button className='addexpence' id='button'
 type='submit'>
  Add Expence
  </button>

  </div>


    </form>

  )
}

export default Form