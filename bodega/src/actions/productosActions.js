//Importar Types
import{
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    INICIAR_DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTOS_EXITO,
    DESCARGA_PRODUCTOS_ERROR,
    ELIMINAR_PRODUCTO,
    ELIMINAR_PRODUCTO_EXITO,
    ELIMINAR_PRODUCTO_ERROR
} from '../types'

import saveAxios from '../config/axios'
import Swal from 'sweetalert2'
import axios from 'axios'

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


//Mostar los productos
export const obetenerProductosAction = () => {
    return async (despachador) => {
        despachador(descargarProductos() )

        try {

            //descarga de productos de la api
            const resp = await saveAxios.get('/products')
            despachador(descargaProductoExito(resp.data))
            
        } catch (error) {
            console.log(error)
           despachador( descargaProductoError())
        }
    }
}

const descargarProductos = () =>({
    type: INICIAR_DESCARGA_PRODUCTOS
})

//Se ejecuta cuando se obtienen los datos los datos en la bd
const descargaProductoExito = (productos) => ({
    type: DESCARGA_PRODUCTOS_EXITO,
    payload: productos
})

//Se ejecuta si hay algún error
const descargaProductoError = (estado) => ({
    type: DESCARGA_PRODUCTOS_ERROR,
    payload: true
})

//Eliminar Productos
export const borrarProductoAction = (id)=>{
    return async (despachador) => {
        despachador(productoAEliminar(id) )

        try {
            //eliminar producto de la api
            await saveAxios.delete(`/products/${id}`)
            despachador(eliminarProductoExito())
        } catch (error) {
            console.log(error)
            despachador(eliminarProductoError())
        }
    }
}

const productoAEliminar = (id) =>({
    type: ELIMINAR_PRODUCTO,
    payload: id
})

const eliminarProductoExito = () => ({
    type: ELIMINAR_PRODUCTO_EXITO    
})

const eliminarProductoError = () => ({
    type: ELIMINAR_PRODUCTO_ERROR,
    payload: true
})