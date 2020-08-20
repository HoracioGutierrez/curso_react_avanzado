import {all,takeEvery,call,put, takeLatest} from "redux-saga/effects"


//WORKER
//Estos se ejecutan si un watcher los llama y son los que realmente hacen los side effects
function* SignupSaga({usuario,email,password}){
    try{

        //yield call(()=>{ axios() })

        let resultado = yield call(fetch,"/api/signup",{
            method:"POST",
            headers : { "content-type": "application/json"},
            body : JSON.stringify({usuario,email,password})
        })

        yield put({type:"FORMULARIO_SIGNUP_SUCCESS",resultado})

    }catch(e){

        yield put({type:"FORMULARIO_SIGNUP_ERROR",error:e.getMessage()})
    }

}


function* LoginSaga({usuario,password}){
    try{

        let resultado = yield call(fetch,"/api/login",{
            method:"POST",
            headers : { "content-type": "application/json"},
            body : JSON.stringify({usuario,password})
        })

        yield put({type:"FORMULARIO_LOGIN_SUCCESS",resultado})

    }catch(e){
        yield put({type:"FORMULARIO_LOGIN_ERROR",error:e.getMessage()})
    }

}


//WATCHERS
//Estos se ejcutan "inmediatamente" y quedan a la espera del patron/efecto que le digamos que tiene que escuchar y nos despacha un saga worker
function* watcherSignupSaga(){
    yield takeEvery("USUARIO_SIGNUP",SignupSaga)
}


function* watcherLoginSaga(){
    yield takeLatest("USUARIO_LOGIN",LoginSaga)
}


//ROOT
//Este saga corre cuando arranca el middleware en el store con el Middleware.run
export function* rootSaga(){

    yield all([
        watcherLoginSaga(),
        watcherSignupSaga()
    ])

}