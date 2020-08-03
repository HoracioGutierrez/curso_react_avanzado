import React from 'react'
import Usuarios from '../componentes/Usuarios'
import { Switch , Route } from "react-router-dom"
import Signup from "../paginas/Signup"
import Landing from "../paginas/Landing"

const Main = () => {
    return (
        <main>
            <Switch>
                <Route path="/" exact component={Landing}/>
                <Route pat="/signup" component={Signup}/>
            </Switch>
        </main>
    )
}

export default Main
