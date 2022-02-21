import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

//Importar action Redux
import { borrarProductoAction,editarProductoAction } from '../actions/productosActions'

const Producto = ({producto}) => {

    const dispatch = useDispatch()

    const navigate = useNavigate()

    //Conifirmacion de eliminar producto
    const eliminarProducto = (id) => {

        dispatch(borrarProductoAction(id))
    }

    //Edicion del producto
    const redireccionAEditar = (producto) =>{
        dispatch(editarProductoAction(producto))
        navigate(`/productos/editar/${producto.id}`)
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

        <button 
            className="btn btn-outline-secondary btn-sm me-2"
            onClick={()=> redireccionAEditar(producto)}
        >Editar
        </button>
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