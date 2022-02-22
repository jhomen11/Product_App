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
  EDITAR_PRODUCTO_EXITO,
  EDITAR_PRODUCTO_ERROR
} from '../types'

const stateinicial = {
  productos: [],
  error: null,
  productoEliminado: null,
  productoEditar: null
};

export default function foo(state = stateinicial, action) {
  switch (action.type) {
    case AGREGAR_PRODUCTO:
    case INICIAR_DESCARGA_PRODUCTOS:
      return {
        ...state,
      };
    case AGREGAR_PRODUCTO_EXITO:
      return {
        ...state,
        productos: [...state.productos, action.payload],
      };
    case AGREGAR_PRODUCTO_ERROR:
    case DESCARGA_PRODUCTOS_ERROR:
    case ELIMINAR_PRODUCTO_ERROR:
    case EDITAR_PRODUCTO_ERROR:
      return {
        ...state,
        error: action.payload,
      };
      case DESCARGA_PRODUCTOS_EXITO:
        return{
          ...state,
          productos: action.payload
        }
      case ELIMINAR_PRODUCTO:
        return{
          ...state,
          productoEliminado: action.payload
        }
        case ELIMINAR_PRODUCTO_EXITO:
          return{
            ...state,
            productos: state.productos.filter( producto => producto.id !== state.productoEliminado),
            productoEliminado: null
          }
        case EDITAR_PRODUCTO:
          return{
            ...state,
            productoEditar: action.payload
          }
        case EDITAR_PRODUCTO_EXITO:
          return{
            ...state,
            productoEditar: null,

            //si el id del producto que estamos leyendo es igual al que viene en el paylod entonces
            //el producto actual se le asigna el producto completo
            productos: state.productos.map(producto => 
              producto.id === action.payload.id ? producto = action.payload : producto
            )
          }
    default:
      return state;
  }
}
