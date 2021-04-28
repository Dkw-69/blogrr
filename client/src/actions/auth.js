import { AUTH } from '../constants/actionTypes'
import * as api from '../api'

export const login = (formData, router) => async (dispatch) => {
    try {
        // log the user in
        const { data } = await api.login(formData)
        dispatch({type: AUTH, data})
        router.push('/home')
    } catch (error) {
        console.log(error)
    }
}

export const signup = (formData, router) => async (dispatch) => {
    try {
        // register the user
        const { data } = await api.signup(formData)
        dispatch({type: AUTH, data})
        router.push('/home')
    } catch (error) {
        console.log(error)
    }
}