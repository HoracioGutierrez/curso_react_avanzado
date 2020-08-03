import React from 'react'
import { connect } from 'react-redux'
import { toggleFormulario, handleLogin , handleSignup , change } from "../../api/actions"

const Signup = ({login,form,toggleFormulario,handleLogin,handleSignup,change}) => {

    function handleSubmit(e){
        e.preventDefault()
        if(login){
            handleLogin(e.target.elements.usuario.value,e.target.elements.password.value)
        }else{
            handleSignup()
        }
    }

    function handleChange(e){
        let name = e.target.name
        let value = e.target.value
        change(name,value)
    }

    return (
        <>
            <h2>{login?"Acceder" : "Crear Cuenta"}</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <input onChange={handleChange} type="text" name="usuario" placeholder={login?"Usuario/Email":"Usuario"} name="usuario" value={form.usuario}/>
                </div>
                {login
                ?null
                :<div>
                    <input onChange={handleChange} type="email" name="email" placeholder="Email" name="email" value={form.email}/>
                </div>}    
                <div>
                    <input onChange={handleChange} type="password" name="password" placeholder="Contraseña" name="password" value={form.password}/>
                </div>
                <button>{login?"Ingresar":"Crear"}</button>
                <button onClick={toggleFormulario}>Ya tengo cuenta</button>
            </form>   
        </>
    )
}



export default connect(
    ({Signup:{login,form}}) => ({login,form}),
    {toggleFormulario,handleLogin,handleSignup,change}
)(Signup)
