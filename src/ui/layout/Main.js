import React from 'react'
import { Switch , Route } from "react-router-dom"
import Signup from "../paginas/Signup"
import Landing from "../paginas/Landing"
import Usuarios from "../paginas/Usuarios"
import Perfil from "../paginas/Perfil"
import Logout from "../paginas/Logout"

const Main = () => {
    return (
        <main>
            <Switch>
                <Route path="/" exact component={Landing}/>
                <Route pat="/signup" component={Signup}/>
                <Route pat="/usuarios" component={Usuarios}/>
                <Route pat="/perfil" component={Perfil}/>
                <Route pat="/logout" component={Logout}/>
            </Switch>
        </main>
    )
}

export default Main
