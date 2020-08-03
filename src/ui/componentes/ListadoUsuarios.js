import React from 'react'
import { connect } from 'react-redux'

const ListadoUsuarios = ({usuarios}) => {
    return (
        <div>
            Listado
            <ul>
            {usuarios.length
            ? usuarios.map((usuario,i)=> <li key={i}>
                {usuario.nombre} {usuario.apellido}
                <button className="material-icons">create</button>
                <button className="material-icons">delete</button>
                </li> )
            : <li>No hay usuarios</li> }
            </ul>
        </div>
    )
}

//export default connect(({Usuarios:{usuarios}}) => ({usuarios}))(ListadoUsuarios)

export default connect(
    ({Usuarios}) => ({usuarios:Usuarios.usuarios})
)(ListadoUsuarios)