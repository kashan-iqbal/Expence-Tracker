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
    console.log(data);
    getData(data);
  }

  return (


    <form onSubmit={submitHandler} >
      <h3>Add Your Expences</h3>

<div className='box'>
  
<div className='firstform'>

<div className='inner'>
  <label htmlFor='expenceTitle'>Add Your Expence</label>

  <input type='text'
    id='expenceTitle'
    placeholder='Add you Expence'
    name='title'
    value={expenceData.title}
    onChange={inputChangeHandler}
    required
  />
</div>

<div className='inner'>
  <label htmlFor='price'>price</label>

  <input type='number'
    id='price'
    name='price'
    value={expenceData.price}
    onChange={inputChangeHandler}
    required
  />
</div>

</div>

<div className='secondform'>

<div className='inner'>
  <label htmlFor='expenceData'>Date</label>

  <input type='date'
    id='expenceData'
    name='Date'
    value={expenceData.Date}
    onChange={inputChangeHandler}
    required
  />
  </div>
<button className='addexpence'
 type='submit'>
  Add Expence
  </button>
</div>

</div>
    </form>

  )
}

export default Form