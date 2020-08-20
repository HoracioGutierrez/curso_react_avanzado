import React from 'react'
import ReactDOM from 'react-dom'
import App from './ui/layout/App'
import {Provider} from "react-redux"
import store from "./api/store"
import {BrowserRouter} from "react-router-dom"
//import {ProviderContext} from "./api/context"

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            {/* <ProviderContext value={{x:1}}> */}
                <App/>
            {/* </ProviderContext> */}
        </Provider>
    </BrowserRouter>,
    document.getElementById("root")
)