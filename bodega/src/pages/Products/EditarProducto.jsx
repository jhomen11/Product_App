import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

//Importar action redux
import { editarProductoAction } from "../../actions/productosActions";

const EditarProducto = () => {
  //State para guardar los datos del formulario
  const [producto, guardarProducto] = useState({
    name: "",
    description: "",
    price: "",
  });

  const dispatch = useDispatch();

  const navigate = useNavigate();

  //Producto a editar
  const productoEditar = useSelector((state) => state.productos.productoEditar);
  useEffect(() => {
    guardarProducto(productoEditar);
  }, [productoEditar]);

  const handleChange = (e) => {
    guardarProducto({
      ...producto,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(editarProductoAction(producto));

    navigate("../Products/productos");
  };

  //console.log(producto)
  return (
    <div>
      <div className="row justify-content-center mt-4">
        <div className="col-md-5">
          <div className="card">
            <div className="card-body">
              <h2 className="text-center mb-4 fw-bold">Editar Producto</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group mb-2">
                  <label className="form-label" htmlFor="">
                    Nombre del Producto
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nombre Producto"
                    name="name"
                    value={producto.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group mb-2">
                  <label className="form-label" htmlFor="descripcion">
                    Descripción
                  </label>
                  <textarea
                    className="form-control"
                    style={{ resize: "none" }}
                    id="descripcion"
                    placeholder="Descripción"
                    name="description"
                    value={producto.description}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label" htmlFor="">
                    Precio
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Precio Producto"
                    name="price"
                    value={producto.price}
                    onChange={handleChange}
                  />
                </div>
                <button className="btn btn-outline-success d-block w-100 mt-3">
                  Guardar Cambios
                </button>
                <Link 
                  to={'/productos'} 
                  className="btn btn-outline-danger d-block w-100 mt-3" 
                >Cancelar
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditarProducto
