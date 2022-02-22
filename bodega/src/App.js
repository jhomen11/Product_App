import Header from "./components/Header";
import Productos from "./components/Productos";
import NuevoProducto from "./components/NuevoProducto";
import EditarProducto from "./components/EditarProducto";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Uso de Redux
//Importar Provider
import { Provider } from "react-redux";
import store from "./store";
import NuevoUsuario from "./components/Usuarios/NuevoUsuario";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Header />
        <div className="container mt-4">
          <Routes>
          <Route path="/" element={<Home/>} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/productos/nuevo" element={<NuevoProducto />} />
            <Route path="/productos/editar/:id" element={<EditarProducto />} />
            <Route path="/usuarios/nuevo" element={<NuevoUsuario/>} />
          </Routes>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
