import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes'
import * as api from '../api'

// action creators
// @desc :functions that return actions
// dispatch enabled by thunk
export const getPosts = () => async (dispatch) => {

    try {
        const { data } = await api.fetchPosts() //get data from the response(backend)
        dispatch({ type: FETCH_ALL, payload: data }) //dispatch the action
    } 
    catch (err) {
        console.error(err)
    }
}

export const createPost = (post) => async (dispatch) => {
   
    try {
        const { data } = await api.createPost(post)
        dispatch({ type: CREATE, payload: data })
    } 
    catch (err) {
        console.error(err)
    }
}

export const updatePost = (id, post) => async (dispatch) => {
   
    try {
        const { data } = await api.updatePost(id, post)
        dispatch({ type: UPDATE, payload: data })
    } 
    catch (err) {
        console.log(err)
    }
}

export const deletePost = (id) => async (dispatch) => {
   
    try {
        await api.deletePost(id)
        dispatch({ type: DELETE, payload: id })
    } 
    catch (err) {
        console.log(err)
    }
}

export const likePost = (id) => async (dispatch) => {
   
    try {
        const { data } = await api.likePost(id)
        dispatch({ type: UPDATE, payload: data })
    } 
    catch (err) {
        console.log(err)
    }
}




