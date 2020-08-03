import React from 'react'
import {NavLink} from "react-router-dom"

const Header = () => {
    return (
        <header>
            <NavLink exact to="/">
                <h1>React Avanzado</h1>
            </NavLink>
            <nav>
                <NavLink to="/signup">signup</NavLink>
            </nav>
        </header>
    )
}

export default Header
