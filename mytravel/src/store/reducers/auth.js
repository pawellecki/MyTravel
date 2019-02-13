const initState = {
    authError: null
}

const auth = (state = initState, action) => {
    switch(action.type) {

        case 'LOGIN_SUCCESS': 
            console.log("login success!!")
            return {
                ...state,
                authError: null
            }
            
        case 'LOGIN_ERROR':
            console.log("login errorrr!!")
            return {
                ...state,
                authError: 'Login failed'
            }
            
        case 'LOGOUT_SUCCESS':
            console.log("Log out ...")
            return state

        default:
            return state
    }
}

export default auth
