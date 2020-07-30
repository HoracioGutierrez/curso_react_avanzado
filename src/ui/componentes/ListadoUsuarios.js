import React from 'react'
import { connect } from 'react-redux'

const ListadoUsuarios = ({usuarios}) => {
    return (
        <div>
            Listado
            <ul>
            {usuarios.length
            ? usuarios.map((usuario,i)=> <li key={i}>{usuario.nombre} {usuario.apellido}</li> )
            : <li>No hay usuarios</li> }
            </ul>
        </div>
    )
}

/* 
VERSION SUPER EXTENDIDA

let mapStateToProps = (store) => {
    return {
        //ElNombreDePropQueQueresQueTeLlegue : la.propiedad.del.store.que.queres.mapear
        usuarios : store.usuarios
    }
}
*/


/* 


2da version

let mapStateToProps = store => (
    let {usuarios} = store
    {
        usuarios : usuarios
    }
) 

*/


//let mapStateToProps = ({usuarios}) => ({usuarios})


/* let mapDispatchToProps = (dispatch) => {
    return {
        //ElNombreDePropQueQueresQueTeLlegue : tuAction
    }
} */

//export default connect(mapStateToProps/*,mapDispatchToProps */)(ListadoUsuarios)
export default connect(({usuarios}) => ({usuarios}))(ListadoUsuarios)