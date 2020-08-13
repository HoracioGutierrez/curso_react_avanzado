import { createStore, applyMiddleware , compose } from "redux"
import reducer from "./reducer"
import {rootSaga} from "../api/sagas"

//Traer el export default de la libreria 
import createSagaMiddleware from "redux-saga"

//Crear el middleware de Saga
let sagaMiddleware = createSagaMiddleware()

//Usar ese middleware
let store = createStore(reducer,applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

export default store