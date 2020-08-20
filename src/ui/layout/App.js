import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Main from './Main'
import {Provider} from "../../api/context"


class App extends React.Component {

    constructor(){
        super()
        this.state = {
            x : 1,
            cambiarX : () => {
                this.setState({x:"Nuevo Valor"})
            }
        }
    }

    /* cambiarX = () => {
        this.setState({x:2})
    } */

    render(){
        return(
            <Provider value={this.state}>
                <Header/>
                <Main/>
                <Footer/>
            </Provider>
        )
    }
}

/* 

const App = () => {
    return (
        <Provider value={{x:1}}>
            <Header/>
            <Main/>
            <Footer/>
        </Provider>
    )
} 

*/

export default App
