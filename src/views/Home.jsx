import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import cake from "../assets/img/cake.png"



const Home = () => {
  return (
    <div className='home'>
    <h3>Bienvenido a <strong>HAPPY CAKE</strong></h3>
    <p>El lugar de los pasteles felices</p>
    <div className='emoji'><img src={cake} alt='cake'></img></div>
    </div>
  )
}

export default Home