//Importar Types
import{
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR
} from '../types'

const stateinicial = {
    productos: [],
    error: null,
    loading: false
}

export default function(state = stateinicial, action) {
    switch(action.type) {
        default:
            return state
    }
}