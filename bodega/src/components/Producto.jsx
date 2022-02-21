import React from 'react'

const Producto = ({producto}) => {
  return (
    <div className="col-12 col-sm-6 col-md-6 col-lg-4 my-3">
    <div className="card">
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{producto.name}</h5>
        <p className="card-text fw-light">
          Precio: <span>$ {producto.price}</span>
        </p>
        <a href="#" className="btn btn-primary">
          Ver Detalles...
        </a>
      </div>
    </div>
  </div>
  )
}

export default Producto