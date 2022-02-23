import { useState } from 'react';
import { useDispatch, } from 'react-redux'
import {useNavigate} from 'react-router-dom'

//Importar actions Redux
import { crearproductoAction } from '../../actions/productosActions'

const NuevoProducto = () => {

  //State para guardar los datos del formulario
  const [name, guardarName] = useState ('')
  const [description, guardarDescription] = useState ('')
  const [price, guardarPrice] = useState ('')

  const dispatch = useDispatch()

  const navigate = useNavigate()



  //llamado de la funcion del action
  const agrgarProducto = (producto) => dispatch(crearproductoAction(producto))

  const handleSubmit = (e) => {
    e.preventDefault()

    //Validar formulario
    if(name.trim() === '' || description.trim() === '' || price <= 0){
      return
    }
    //Manejo de Errores

    //crear el producto
    agrgarProducto({
      name, description, price
    })
    navigate("../Products/productos")
  }

  return (
    <div>
      <div className="row justify-content-center mt-5">
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
                    name="name"
                    value={name}
                    onChange={e => guardarName(e.target.value)}
                  />
                </div>
                <div className="form-group mb-2">
                    <label className="form-label" htmlFor="descripcion">Descripción</label>
                    <textarea
                    className="form-control"
                    style={{ resize: "none" }}
                    id="descripcion"
                    placeholder="Descripción"
                    name="description"
                    value={description}
                    onChange={e => guardarDescription(e.target.value)}
                  ></textarea>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label" htmlFor="">Precio</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Precio Producto"
                    name="price"
                    value={price}
                    onChange={e => guardarPrice(Number(e.target.value))}
                  />
                </div>
                <button className="btn btn-dark d-block w-100 mt-3">Agregar</button>
              </form>
              {/* {error ? <p className='alert alert-danger text-center p-2 mt-3'>Ha ocurrido un Error</p> : null} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NuevoProducto;
