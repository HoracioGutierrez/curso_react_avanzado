import React from 'react'
import {NavLink} from "react-router-dom"
import {useSelector, useDispatch} from "react-redux"

const Header = () => {

    const logged = useSelector(state => state.Signup.logged)

    return (
        <header>
            <NavLink exact to="/">
                <h1>React Avanzado</h1>
            </NavLink>
            <nav>
                {logged
                ?<>
                    <NavLink to="/usuarios">usuarios</NavLink>
                    <NavLink to="/perfil">perfil</NavLink>
                    <NavLink to="/logout">logout</NavLink>
                </>
                :<NavLink to="/signup">signup</NavLink>}
            </nav>
        </header>
    )
}

export default Header
