export let modificarValor = (name,value) => ({type : "VALOR_MODIFICAR" , name , value})

export let agregarUsuario = () => ({ type : "USUARIO_AGREGAR" })
     
export let borrarUsuario = () => {}

export let editarUsuario = () => {}



export let toggleFormulario = () => ({type:"FORMULARIO_TOGGLE"}) 


/* 
export let handleLogin = (usuario,password) => {
    //Hacer un pedido al servidor

    //Thunk
    return function(dispatch){

        dispatch({ type : "FORMULARIO_LOGIN_REQUEST" })


        fetch("/api/login",{
            method : "POST",
            headers : { "content-type": "application/json"},
            body : JSON.stringify({usuario,password})
        })
        .then(res=>{
            if(res.status == 200){
                res.json()
            }else{
                dispatch({ type : "FORMULARIO_LOGIN_ERROR" , payload : res.status })    
            }
        })
        .then(res=>{
            dispatch({ type : "FORMULARIO_LOGIN_SUCCESS" , payload : res })
        })
        .catch(error=>{
            dispatch({ type : "FORMULARIO_LOGIN_ERROR" , payload : error })
        })
    }
}


export let handleSignup = (usuario,email,password) => {

    return function(dispatch){

        dispatch({ type : "FORMULARIO_SIGNUP_REQUEST" })

        fetch("/api/signup",{
            method : "POST",
            headers : { "content-type": "application/json"},
            body : JSON.stringify({usuario,email,password})
        })
        .then(res=>{
            if(res.status == 200){
                res.json()
            }else{
                dispatch({ type : "FORMULARIO_SIGNUP_ERROR" , payload : res.status })    
            }
        })
        .then(res=>{
            dispatch({ type : "FORMULARIO_SIGNUP_SUCCESS" , payload : res })
        })
        .catch(error=>{
            dispatch({ type : "FORMULARIO_SIGNUP_ERROR" , payload : error })
        })
    }
} */

export let handleLogin = (usuario,password) => {
    return {type:"USUARIO_LOGIN",usuario,password}
}

export let handleSignup = (usuario,email,password) => {
    return {type:"USUARIO_SIGNUP",usuario,email,password}
}

export let change = (name,value) => ({ type : "FORMULARIO_CAMBIAR" , name , value })
