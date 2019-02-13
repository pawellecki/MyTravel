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

        case 'SIGNUP_SUCCESS':
            console.log("signUP success!!")
            return {
                ...state,
                authError: null
            }

        case 'SIGNUP_ERROR':
            console.log("signUP error ...")
            return {
                ...state,
                authError: action.err.message
            }

        default:
            return state
    }
}

export default auth
