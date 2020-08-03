let initState = {
    form : {
        nombre : "",
        apellido : ""
    },
    usuarios : []
}

let reducer = (state=initState,action) => {
    switch(action.type){
        case "USUARIO_AGREGAR":
            return {...state}
        case "VALOR_MODIFICAR":
            return {...state}
        default :
            return state
    }
}

export default reducer