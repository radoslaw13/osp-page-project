export const USER_LOGGED_IN = 'USER_LOGGED_IN'
export const USER_LOGGED_OUT = 'USER_LOGGED_OUT'
export const SET_USER_DATA = 'SET_USER_DATA'

export function userLoggedIn() {
    return {
        type: USER_LOGGED_IN
    }
}

export function userLoggedOut() {
    return {
        type: USER_LOGGED_OUT
    }
}

export function setUserData(user) {
    return {
        type: SET_USER_DATA,
        user
    }
}


