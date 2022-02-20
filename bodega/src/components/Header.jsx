
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-light justify-content-between">
        <div className="container">
            <h1>Bodega React, Redux</h1>
        <a href="/productos/nuevo"
            className="btn btn-dark"
        >Agregar Producto</a>
        </div>
    </nav>
  )
}

export default Header