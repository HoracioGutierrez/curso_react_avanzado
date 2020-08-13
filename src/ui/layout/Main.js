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
                <Route path="/signup" component={Signup}/>
                <Route path="/usuarios" component={Usuarios}/>
                <Route path="/perfil" component={Perfil}/>
                <Route path="/logout" component={Logout}/>
            </Switch>
        </main>
    )
}

export default Main
