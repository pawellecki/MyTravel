import auth from './auth'
import project from './project'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    auth,
    project
})

export default rootReducer
