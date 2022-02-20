import Header from "./components/Header";
import Productos from "./components/Productos";
import NuevoProducto from "./components/NuevoProducto";
import EditarProducto from "./components/EditarProducto";

import { BrowserRouter as Router, Routes,Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Header/>
      <div className="container mt-4">
        <Routes>
        <Route path="/" element={<Productos />} />
        <Route path="/productos/nuevo" element={<NuevoProducto/>} />
        <Route path="/productos/editar/:id" element={<EditarProducto/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
