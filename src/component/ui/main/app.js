import React from 'react'
import Header from '../header/app'
import Footer from '../footer/app'



import "./app.css"


const Main = (props) => {
  return (

    <div className='container'>

      <Header />
      <section>{props.children}</section>
      <Footer />
    </div>

  )
}

export default Main