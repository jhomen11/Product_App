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
        case AGREGAR_USUARIO_EXITO:
            return{
                ...state,
                usuarios: [...state.usuarios, action.payload]
            }
        case AGREGAR_USUARIO_ERROR:
            return{
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}