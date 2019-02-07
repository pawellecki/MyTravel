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
            
        case 'SIGNOUT_SUCCESS':
            console.log("SIGN out ...")
            return state

        default:
            return state
    }
}

export default auth
