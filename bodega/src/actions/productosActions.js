//Importar Types
import{
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR
} from '../types'

//Creando nuevos productos
export const crearproductoAction = (producto) => {
    return (despachador) => {
       despachador( agregarProducto()) //dispatch = despachador, manda a ejecutar las acciones

       try {
           despachador( agregarProductoExito(producto))
       } catch (error) {
           despachador( agregarProductoError(true))
       }
    }
}

const agregarProducto = () =>({
    type: AGREGAR_PRODUCTO,
})

//Se ejecuta cuando se guardan los datos en la bd
const agregarProductoExito = (producto) => ({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto  //Modifica el state
})

//Se ejecuta si hay algún error
const agregarProductoError = (estado) => ({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: estado
})