import { combineReducers } from 'redux'
import auth from './auth'
import project from './project'
import { firestoreReducer } from 'redux-firestore'

const rootReducer = combineReducers({
    auth,
    project,
    firestore: firestoreReducer
})

export default rootReducer
