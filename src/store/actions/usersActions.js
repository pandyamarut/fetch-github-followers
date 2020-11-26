import {GET_USERS, GET_USERS_LOADING, USERS_ERROR} from '../types'
import axios from 'axios'

export const getUsers = (userName) => async dispatch => {
    try{
        dispatch( {
            type: GET_USERS_LOADING,
            loading: true
        })
        const res = await axios.get(`https://api.github.com/users/${userName}/followers`)
        dispatch( {
            type: GET_USERS_LOADING,
            loading: false
        })
        dispatch( {
            type: GET_USERS,
            payload: res.data,
            loading: false
        })
    }
    catch(e){
        dispatch( {
            type: USERS_ERROR,
            payload: console.log(e),
            loading: false
        })
    }
}

export const filterUser = (username) => dispatch =>{
    dispatch({
        type: 'FILTER_USER',
        username: username
    });
}