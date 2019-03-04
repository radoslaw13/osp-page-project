import { USER_LOGGED_IN, USER_LOGGED_OUT, SET_USER_DATA } from './actions';

export default (state = {
    userIsLogged: false,
    session: null
}, action) => {
    switch (action.type) {
        case USER_LOGGED_IN:
            return  {...state, userIsLogged: true}
        case USER_LOGGED_OUT:
            return  {...state, userIsLogged: false}
        case SET_USER_DATA:
            return {...state, user: action.user}
        default:
            return state
    }
}