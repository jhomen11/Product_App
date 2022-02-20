//Importar Types
import{
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR
} from '../types'
import saveAxios from '../config/axios'
import Swal from 'sweetalert2'

//Creando nuevos productos
export function crearproductoAction(producto) {
    return async(despachador) => {
       despachador( agregarProducto()) //dispatch = despachador, manda a ejecutar las acciones

       try {

            //Insertar datos en la api
            await saveAxios.post('/products', producto)

            //Actualizar el state
            despachador( agregarProductoExito(producto))

            //Mostar alerta
            Swal.fire(
                'Correcto',
                'El producto de ha agregado correctamente',
                'success'
            )

       } catch (error) {
           console.log(error)
           despachador( agregarProductoError(true))

           //Mostar alerta
           Swal.fire({
            icon:'error',
            title:'Hubo un error',
            text:'Ha ocurrido un Error, intente nuevamente'
           })
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