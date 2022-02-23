import Header from "./components/Header";

import Home from "./pages/Home";
import NuevoUsuario from "./pages/Usuarios/NuevoUsuario";
import Productos from "./pages/Products/Productos";
import NuevoProducto from "./pages/Products/NuevoProducto";
import EditarProducto from "./pages/Products/EditarProducto";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Uso de Redux
//Importar Provider
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Header />
        <div className="container-fluid main">
          <Routes>
          <Route path="/" element={<Home/>} />
            <Route path="products/productos" element={<Productos/>} />
            <Route path="/productos/nuevo" element={<NuevoProducto/>  } />
            <Route path="/productos/editar/:id" element={<EditarProducto/>} />
            <Route path="/usuarios/nuevo" element={<NuevoUsuario/>} />
          </Routes>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
