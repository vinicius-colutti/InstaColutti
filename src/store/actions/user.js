import {USER_LOGGED_IN, USER_LOGGED_OUT, LOADING_USER, USER_LOADED} from './actionTypes'
import axios from 'axios'
import {setMessage} from './message'

const authBaseURL = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty'
const API_KEY = 'AIzaSyDs4CFvHswQRPIPa3GL0pGPY99ALbBm-cU'

export const userLogged = user =>{
    return {
        type: USER_LOGGED_IN,
        payload: user
    }
}

export const logout = () =>{
    return{
        type: USER_LOGGED_OUT
    }
}

export const createUser = user =>{
    return dispatch =>{
        axios.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyDs4CFvHswQRPIPa3GL0pGPY99ALbBm-cU', {
            email: user.email,
            password: user.password,
            returnSecureToken: true
        })
            .catch(err => {
                dispatch(setMessage({title: 'Erro', text: 'Ocorreu um problema ao inserir o usuário, tente novamente'}))
            })
            .then(res =>{
                if(res.data.localId){
                    axios.put(`/users/${res.data.localId}.json`, {
                        name: user.name
                    })
                        .catch(err => {
                            dispatch(setMessage({title: 'Erro', text: 'Ocorreu um problema ao inserir o usuário, tente novamente'}))
                        })
                        .then(res =>{
                            //dispatch(setMessage({title: 'Sucesso', text: 'Usuário registrado com sucesso!'}))
                            dispatch(login(user))
                        })
                }
            })
    }
}

export const loadingUser = () =>{
    return{
        type: LOADING_USER
    }
}

export const userLoaded = () =>{
    return{
        type: USER_LOADED
    }
}

export const login = user =>{
    return dispatch =>{
        dispatch(loadingUser())
        axios.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyDs4CFvHswQRPIPa3GL0pGPY99ALbBm-cU', {
            email: user.email,
            password: user.password,
            returnSecureToken: true
        })
            .catch(err => {
                dispatch(setMessage({title: 'Erro', text: 'E-mail ou senha inválidos!'}))
                return
            })
            .then(res =>{
                if(res.data.localId){
                    user.token = res.data.idToken
                    axios.get(`/users/${res.data.localId}.json`)
                        .catch(err => {
                            dispatch(setMessage({title: 'Erro', text: 'E-mail ou senha inválidos!'}))
                        })
                        .then(res =>{
                            delete user.password,
                            user.name = res.data.name
                            dispatch(userLogged(user))
                            dispatch(userLoaded())
                        })
                }
            })
    }
}