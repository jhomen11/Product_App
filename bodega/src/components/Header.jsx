import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-light justify-content-between">
      <div className="container">
        <h1><Link to={'/'} className="navbar-brand text-dark">Bodega React, Redux</Link></h1>
        <Link to="/usuarios/nuevo" className="btn btn-dark">
          Registrate
        </Link>
      </div>
    </nav>
  );
};

export default Header;  
