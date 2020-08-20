import React , { useContext } from 'react'
import { connect } from 'react-redux'
import { toggleFormulario, handleLogin , handleSignup , change } from "../../api/actions"
import context from "../../api/context"

//const Signup = ({login,form,toggleFormulario,handleLogin,handleSignup,change}) => {

const Signup = () => {

    let contexto = useContext(context)

    let {login,form} = contexto.state
    let dispatch = contexto.dispatch
    

    function handleSubmit(e){
        e.preventDefault()
        
        let usuario = e.target.elements.usuario.value
        let password = e.target.elements.password.value
        
        if(login){
            handleLogin(usuario,password)
        }else{
            let email = e.target.elements.email.value
            handleSignup(usuario,email,password)
        }
    }

    function handleChange(e){
        let name = e.target.name
        let value = e.target.value
        dispatch({ type : "FORMULARIO_CAMBIAR",name,value})
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
                <button type="submit">{login?"Ingresar":"Crear"}</button>
                <button type="button" onClick={toggleFormulario}>Ya tengo cuenta</button>
            </form>   
        </>
    )
}



/* export default connect(
    ({Signup:{login,form}}) => ({login,form}),
    {toggleFormulario,handleLogin,handleSignup,change}
)(Signup)
 */

 export default Signup