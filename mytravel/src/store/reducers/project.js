import * as actionTypes from '../../constants/actionTypes'

const initState = {
    projects: [
        { id: '1', title: 'test title first', content: 'my 111 content!' },
        { id: '2', title: 'test title second', content: 'my 222222 content!' },
        { id: '3', title: 'test title third', content: 'my 33333 content!' }
    ]
}
const project = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.CREATE_PROJECT:
            console.log('create projecttt')
            return state

        case actionTypes.CREATE_PROJECT_ERROR:
            console.log("errrr",action.err)
            return state

        default:
            return state
    }
}

export default project
