import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Main from './Main'
import {Provider} from "../../api/context"
import { useReducer } from 'react'
import {reducer,initState} from "../../api/reducers/SignupReducerHook"
/* 
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

   

    render(){
        return(
            <Provider value={this.state}>
                <Header/>
                <Main/>
                <Footer/>
            </Provider>
        )
    }
} */



const App = () => {

    const [state, dispatch] = useReducer(reducer,initState)

    return (
        <Provider value={{state,dispatch}}>
            <Header/>
            <Main/>
            <Footer/>
        </Provider>
    )
} 



export default App
