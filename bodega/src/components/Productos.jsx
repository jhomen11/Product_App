import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

//Importar action Redux
import { obetenerProductosAction } from "../actions/productosActions";
import Producto from "./Producto";

const Productos = () => {
  
  const dispatch = useDispatch();

  useEffect(() => {
    //consulta a la api
    const cargarProductos = () => dispatch(obetenerProductosAction());
    cargarProductos();
    //eslint-disable-next-line
  }, []);

  //Obtener la info del state
  const productos = useSelector((state) => state.productos.productos);

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
            <Producto
              key={index}
              producto={producto}
            />
            ))}
          </div>
      </div>
    </div>
  );
};

export default Productos;
