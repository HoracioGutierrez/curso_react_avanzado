let initState = {
    form : {
        usuario : "",
        email : "",
        password : ""
    },
    login : false
}

let reducer = (state=initState,action) => {
    switch(action.type){
        case "FORMULARIO_SUBMIT" :
            return {...state}
        case "FORMULARIO_CAMBIAR" :
            return {...state, form : { ...state.form , [action.name] : action.value } }
        case "FORMULARIO_TOGGLE" :
            return {...state,login:!state.login}
        default : 
            return state
    }
}

export default reducer