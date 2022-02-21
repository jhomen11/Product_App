import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

//Importar action Redux
import { obetenerProductosAction } from "../actions/productosActions";

const Productos = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    //consulta a la api
    const cargarProductos = () => dispatch(obetenerProductosAction());
    cargarProductos();
  }, []);

  //Obtener la info del state
  const productos = useSelector((state) => state.productos.productos);

  console.log(productos);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h2 className="text-center mb-3">Productos</h2>
        </div>
        <div className="row">
          {productos.length === 0
          ? "No hay productos para mostrar"
          : productos.map((producto, index) => (
            <div className="col-lg-4">
              <div className="card">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            ))}
          </div>
      </div>
    </div>
  );
};

export default Productos;
