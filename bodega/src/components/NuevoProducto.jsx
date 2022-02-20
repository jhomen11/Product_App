import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'

//Importar actions Redux
import { crearproductoAction } from '../actions/productosActions'

const NuevoProducto = () => {

  //State para guardar los datos del formulario
  const [nombre, guardarNombre] = useState ('')
  const [descripcion, guardarDescripcion] = useState ('')
  const [precio, guardarPrecio] = useState ('')

  const dispatch = useDispatch()

  //llamado de la funcion del action
  const agrgarProducto = (producto) => dispatch(crearproductoAction(producto))

  const handleSubmit = (e) => {
    e.preventDefault()

    //Validar formulario
    if(nombre.trim() === '' || descripcion.trim() === '' || precio <= 0){
      return
    }
    //Manejo de Errores

    //crear el producto
    agrgarProducto({
      nombre, descripcion, precio
    })
  }

  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="text-center mb-4 fw-bold">
                Agregar Nuevo Producto
              </h2>
              <form 
                onSubmit={handleSubmit}
              >
                <div className="form-group mb-2">
                  <label className="form-label" htmlFor="">Nombre del Producto</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nombre Producto"
                    name="nombre"
                    value={nombre}
                    onChange={e => guardarNombre(e.target.value)}
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
                    value={descripcion}
                    onChange={e => guardarDescripcion(e.target.value)}
                  ></textarea>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label" htmlFor="">Precio</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Precio Producto"
                    name="precio"
                    value={precio}
                    onChange={e => guardarPrecio(Number(e.target.value))}
                  />
                </div>
                <button className="btn btn-dark d-block w-100 mt-3">Agregar</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NuevoProducto;
