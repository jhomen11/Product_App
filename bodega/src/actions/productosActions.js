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
    ELIMINAR_PRODUCTO_ERROR,
    EDITAR_PRODUCTO,
    INICIO_EDITAR_PRODUCTO,
    EDITAR_PRODUCTO_EXITO,
    EDITAR_PRODUCTO_ERROR
} from '../types'

import saveAxios from '../config/axios'
import Swal from 'sweetalert2'


//CREAR PRODUCTO
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


//MOSTAR PRODUCTOS
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

//ELIMINAR PRODUCTO
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

//EDITAR PRODUCTO
//Consiguiendo el producto a editar
export const seleccionarEditarProducto = (producto) => {
    return (despachador) => {
        despachador(productoAEditarAction(producto))
    }
}

const productoAEditarAction = (producto) => ({
    type:EDITAR_PRODUCTO,
    payload: producto
})

//Modificar el producto en la api
export const editarProductoAction = (producto) => {
    return async(despachador) => {
        despachador(editarProducto(producto))
        
        try {
            await saveAxios.put(`/products/${producto.id}`, producto)
            //console.log(resp)
            despachador(editarProductoExito(producto))

            //Mostar alerta
            Swal.fire(
                'Correcto',
                'El producto de ha agregado correctamente',
                'success'
            )
        } catch (error) {
            console.log(error)
            despachador(editarProductoError())
        }
    }
}

const editarProducto = () => ({
    type: INICIO_EDITAR_PRODUCTO
})
const editarProductoExito = (producto) => ({
    type: EDITAR_PRODUCTO_EXITO,
    payload: producto
})
const editarProductoError = () => ({
    type: EDITAR_PRODUCTO_ERROR
})