import { useState } from 'react'
import { useDispatch } from 'react-redux'

//importar Actios Redux
import { crearusuarioActions } from '../../actions/usuarioActions'

const NuevoUsuario = () => {

  //State para guardar los datos del formulario
  const [name, guardarName] = useState ('')
  const [lastname, guardarLastName] = useState ('')
  const [email, guardarEmail] = useState ('')
  const [password, guardarPassword] = useState ('')

  const dispatch = useDispatch()

  //llamado de la funcion del action
  const agregarUsuario = (usuario) => {dispatch(crearusuarioActions(usuario))}

  const handleSubmit = (e) => {
    e.preventDefault()

    //Validar formulario
    if(name.trim() === '' || lastname.trim() === '' || email.trim() === '' || password.trim() === '' ){
      return
    }

    //crear el usuario
    agregarUsuario({
      name, lastname, email, password
    })
  }

  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="text-center mb-4 fw-bold">
                Registro de Usuarios
              </h2>
              <form 
                onSubmit={handleSubmit}
              >
                <div className="form-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nombre"
                    name="name"
                    value={name}
                    onChange={e => guardarName(e.target.value)}
                  />
                </div>
                <div className="form-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Apellido"
                    name="lastname"
                    value={lastname}
                    onChange={e => guardarLastName(e.target.value)}
                  />
                </div>
                
                <div className="form-group mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Ingresa tu Correo"
                    name="email"
                    value={email}
                    onChange={e => guardarEmail(e.target.value)}
                  />
                </div>
                <div className="form-group mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Contraseña"
                    name="lastname"
                    value={password}
                    onChange={e => guardarPassword(e.target.value)}
                  />
                </div>
                <button className="btn btn-dark d-block w-100 mt-3">Registrar</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NuevoUsuario