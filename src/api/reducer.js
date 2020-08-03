/* let initState = {
    usuarios : [],
    form : {
        nombre : "",
        apellido : ""
    },
    login : false
}

let reducer = (state = initState,action) => {
    switch(action.type){
        case "FORMULARIO_TOGGLE" : 
            return {
                ...state,
                login : !state.login
            }
        case "USUARIO_AGREGAR" : 
            return {...state , usuarios : [
                ...state.usuarios , 
                { 
                    nombre : state.form.nombre , 
                    apellido : state.form.apellido 
                } 
            ] 
        }
        case "VALOR_MODIFICAR" : 
            return {...state , form : { ...state.form , [action.name] : action.value } }
        default :
            return state
    }
}

export default reducer */

import {combineReducers} from "redux"
import Signup from "./reducers/Signup"
import Usuarios from "./reducers/Usuarios"


let reducer = combineReducers({
    Signup , 
    Usuarios
})

export default reducer