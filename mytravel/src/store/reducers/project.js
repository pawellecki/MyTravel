import * as actionTypes from '../../constants/actionTypes'

const initState = {
    projects: []
}
const project = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.CREATE_PROJECT:
            console.log('create projecttt state', state)
            console.log('create projecttt act', action)
            return state

        case actionTypes.CREATE_PROJECT_ERROR:
            console.log("errrr",action.err)
            return state

        default:
            return state
    }
}

export default project
