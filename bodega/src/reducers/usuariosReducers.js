//Importar Types
import {
    AGREGAR_USUARIO,
    AGREGAR_USUARIO_EXITO,
    AGREGAR_USUARIO_ERROR
} from '../types'

const stateinicial = {
    usuarios: [],
    error: null
    
}

export default function foo( state = stateinicial, action) {
    switch (action.type) {
        case AGREGAR_USUARIO:
            return{
                ...state
            }
        default:
            return state
    }
}