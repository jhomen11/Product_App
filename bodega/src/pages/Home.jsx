import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className='container-fluid main'>
      <section id='hero'>
        <div className="contenedor">
          <div className="info">
            <div className="img">
              <h1>Bienvenidos</h1>
              <h3>Lorem ipsum, dolor sit amet elit.</h3>
              <p className='text_hero'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem distinctio reprehenderit similique vel alias doloribus, eum cum neque tenetur suscipit.</p>
              <Link className='boton_hero' to={'../Products/productos'}>Ver Productos</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home