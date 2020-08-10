let initState = {
    form : {
        usuario : "",
        email : "",
        password : ""
    },
    login : false, //Este controlaba el toggle del formulario
    
    logging : false,
    login_error : "",
    logged : false,

    signing : false,
    sign_error : ""
}

let reducer = (state=initState,action) => {
    switch(action.type){

        case "FORMULARIO_SIGNUP_REQUEST" : 
            return {...state,signing:false,form:{usuario:"",email:"",password:""}}
        case "FORMULARIO_SIGNUP_SUCCESS" : 
            return {...state,signing:false}
        case "FORMULARIO_SIGNUP_ERROR" : 
            return {...state,signing:true}
            
        case "FORMULARIO_LOGIN_ERROR" :
            return {...state,logging : false}
        case "FORMULARIO_LOGIN_SUCCESS" :
            return {...state,logging : false,logged:true}
        case "FORMULARIO_LOGIN_REQUEST" : 
            return {...state,logging:true,form:{usuario:"",password:""}}

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