//Importar Types
import {
    AGREGAR_USUARIO,
    AGREGAR_USUARIO_EXITO,
    AGREGAR_USUARIO_ERROR
} from '../types'

import saveAxios from '../config/axios'

export const  crearusuarioActions = (usuario) => {
    return async(despachador) => {
        despachador(agregarUsuario())

        try {
            //Insertar datos en la api
            //await saveAxios.post('/users', usuario)
            console.log((usuario))
            
        } catch (error) {
            console.log(error)
        }
    }
}

const agregarUsuario = () => ({
    type: AGREGAR_USUARIO
})
