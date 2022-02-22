import { combineReducers } from 'redux'
import productosReducers from './productosReducers'
import usuariosReducers from './usuariosReducers'

export default combineReducers({
    productos: productosReducers,
    usuarios: usuariosReducers
})