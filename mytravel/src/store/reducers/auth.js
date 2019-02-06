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

        default:
            return state
    }
}

export default auth
