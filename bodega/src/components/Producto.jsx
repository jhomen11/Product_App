import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

//Importar action Redux
import { borrarProductoAction } from '../actions/productosActions'

const Producto = ({producto}) => {

    const dispatch = useDispatch()

    //Conifrmacion de eliminar producto
    const eliminarProducto = (id) => {

        dispatch(borrarProductoAction(id))
    }

  return (
    <div className="col-12 col-sm-6 col-md-6 col-lg-4 my-3">
    <div className="card">
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{producto.name}</h5>
        <h6 className="card-text fw-light">
          Precio: <span>$ {producto.price}</span>
        </h6>
        <p>Detalle: {producto.description}</p>

        <Link to={'/productos/editar/:id'} className="btn btn-outline-secondary btn-sm me-2">
          Editar
        </Link>
        <button 
            className="btn btn-outline-danger btn-sm"
            onClick={() => eliminarProducto(producto.id)}
        >Eliminar
        </button>
      </div>
    </div>
  </div>
  )
}

export default Producto