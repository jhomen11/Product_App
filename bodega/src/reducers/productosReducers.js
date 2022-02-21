//Importar Types
import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_EXITO,
  AGREGAR_PRODUCTO_ERROR,
  INICIAR_DESCARGA_PRODUCTOS,
  DESCARGA_PRODUCTOS_EXITO,
  DESCARGA_PRODUCTOS_ERROR
} from "../types";

const stateinicial = {
  productos: [],
  error: null,
};

export default function (state = stateinicial, action) {
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
      return {
        ...state,
        error: action.payload,
      };
      case DESCARGA_PRODUCTOS_EXITO:
        return{
          ...state,
          productos: action.payload
        }
    default:
      return state;
  }
}
