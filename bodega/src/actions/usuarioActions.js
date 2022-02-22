//Importar Types
import {
    AGREGAR_USUARIO,
    AGREGAR_USUARIO_EXITO,
    AGREGAR_USUARIO_ERROR
} from '../types'

import saveAxios from '../config/axios'
import Swal from 'sweetalert2'


export const  crearusuarioActions = (usuario) => {
    return async(despachador) => {
        despachador(agregarUsuario())

        try {
            //Insertar datos en la api
            await saveAxios.post('/users', usuario)
            //console.log((usuario))

            //Actualizar el state
            despachador(agregarUsuarioExito(usuario))

            //Mostar alerta
            Swal.fire(
                'Correcto',
                'El producto de ha agregado correctamente',
                'success'
            )
            
        } catch (error) {
            console.log(error)
            despachador(agregarUsuarioError(true))
        }
    }
}

const agregarUsuario = () => ({
    type: AGREGAR_USUARIO
})

const agregarUsuarioExito = (producto) => ({
    type: AGREGAR_USUARIO_EXITO,
    payload: producto
})

const agregarUsuarioError = (estado) => ({
    type: AGREGAR_USUARIO_ERROR,
    payload: estado
})
