import { useState } from "react"
import { useDispatch, useSelector } from 'react-redux'

const EditarProducto = () => {

  //Producto a editar
  const producto = useSelector(state => state.productos.productoEditar)
  if(!producto) return null

  //console.log(producto)
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="text-center mb-4 fw-bold">
                Editar Producto
              </h2>
              <form action="">
                <div className="form-group mb-2">
                  <label className="form-label" htmlFor="">Nombre del Producto</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nombre Producto"
                    name="nombre"
                    value={producto.name}
                  />
                </div>
                <div className="form-group mb-2">
                    <label className="form-label" htmlFor="descripcion">Descripción</label>
                    <textarea
                    className="form-control"
                    style={{ resize: "none" }}
                    id="descripcion"
                    placeholder="Descripción"
                    name="descripcion"
                    value={producto.description}
                  ></textarea>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label" htmlFor="">Precio</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Precio Producto"
                    name="precio"
                    value={producto.price}
                  />
                </div>
                <button className="btn btn-dark d-block w-100 mt-3">Guardar Cambios</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditarProducto