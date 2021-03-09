import {
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGOUT
} from '../actions/types';

const initialState = {
    token: localStorage.getItem('token'),
    isAuth: null,
    loading: true,
    user: null
}

export default function(state = initialState, action ) {

    const { type, payload } = action;

    switch(type){

        case AUTH_ERROR:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                isAuth: false,
                loading: false
            }

        case USER_LOADED:
            console.log(payload)
            return {
                ...state,
                isAuth: true,
                user: payload.user,
                loading: false,
            }

        case LOGIN_SUCCESS:
            return {
                ...state,
                ...payload,
                isAuth: true,
                loading: false
            };
        case AUTH_ERROR:
        case LOGOUT:
            return {
                ...state,
                token: null,
                isAuth: false,
                loading: false,
                user: null
            };


        default: 
            return state;
    }
}