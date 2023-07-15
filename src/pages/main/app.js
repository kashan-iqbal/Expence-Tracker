import React, { useState } from 'react'
import Main from '../../component/ui/main/app'
import Form from '../../component/feature/form/app'
import Filter from "../../component/feature/filter/app"
import Expencelist from '../../component/feature/expnece list/app'

const expneceListArr=[
  {
    id:1,
    title:"expence 01",
    price: 120,
    date: new Date("2022-12-24"),
  },
  {
    id:2,
    title:"expence 2",
    price:45,
    date: new Date("2022-08-18"),
  
  },
]

const Home = () => {
 const [expenceList,setExpenceList]=useState(expneceListArr)
//  const [editValue,setEditValue]=useState(null)
  

   const addExpenceHandler=(data)=>{
    setExpenceList([data,...expenceList])
   }

   const getIdHandler=(id,method)=>{
   if (method === 'delete'){
    const deleteData = expenceList.filter(data => +data.id !== +id)
    setExpenceList(deleteData)
   }
  //   else if(method === "edit"){
  //   const editValue= expenceList.filter(data=> +data.id === +id)
  //   setEditValue(editValue);
  //  }


   }

  return (
    <Main>

      <Form 
      getData={addExpenceHandler} 
      // editValues={editValue}
      />
      <Filter />
      <Expencelist 
      list = {expenceList} 
      getId={getIdHandler} />


    </Main>
  )
}

export default Home