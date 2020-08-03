import React from 'react'
import { connect } from "react-redux"
import { agregarUsuario , modificarValor } from "../../api/actions"
import { bindActionCreators } from 'redux'


const FormularioUsuarios = ({nombre,apellido,modificarValor,agregarUsuario}) => {

    function handleChange(e){
        modificarValor(e.target.name,e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        agregarUsuario()
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input onChange={handleChange} name="nombre" type="text" placeholder="Nombre" value={nombre}/>
            </div>
            <div>
                <input onChange={handleChange} name="apellido" type="text" placeholder="Appellido" value={apellido}/>
            </div>
            <button>Agregar</button>
        </form>
    )
}


let mapDispatchToProps = (dispatch) => {
    return {
        //elNombreDelProp : action + dispatch
        agregarUsuario : bindActionCreators(agregarUsuario,dispatch),
        modificarValor : bindActionCreators(modificarValor,dispatch)
    }
}


export default connect(
    ({nombre,apellido}) => ({nombre,apellido}),
    mapDispatchToProps
)(FormularioUsuarios)
