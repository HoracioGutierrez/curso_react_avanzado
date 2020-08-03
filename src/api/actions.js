export let modificarValor = (name,value) => ({type : "VALOR_MODIFICAR" , name , value})

export let agregarUsuario = () => ({ type : "USUARIO_AGREGAR" })
     
export let borrarUsuario = () => {}

export let editarUsuario = () => {}



export let toggleFormulario = () => ({type:"FORMULARIO_TOGGLE"}) 


export let handleLogin = () => {
    //Hacer un pedido al servidor
    return function(dispatch){
        fetch("/api/login",{
            method : "POST",
            headers : { "content-type": "application/json"},
            body : JSON.stringify()
        })
        .then(res=>res.json())
        .then(res=>{
            dispatch({ type : "FORMULARIO_LOGIN_SUCCESS" })
        })
        .catch(error=>{
            dispatch({ type : "FORMULARIO_LOGIN_ERROR" })
        })
    }
}

export let handleSignup = () => ({ type : "FORMULARIO_SIGNUP" })

export let change = (name,value) => ({ type : "FORMULARIO_CAMBIAR" , name , value })
