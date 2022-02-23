import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link to={"/"} className="navbar-brand">
          Bodega React-Redux
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to={"/"} className="nav-link" aria-current="page">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"Products/productos"} className="nav-link">
                Productos
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link to={'#'} className="nav-link">
                Contacto
              </Link>
            </li> */}
          </ul>
          <div>
            <Link to="/usuarios/nuevo" className="btn btn-outline-light me-2">
              Registrate
            </Link>
            <button className="btn btn-secondary">Inicia Sesión</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
