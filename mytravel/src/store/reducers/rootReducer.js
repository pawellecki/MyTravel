import auth from './auth'
import project from './project'
import { firestoreReducer } from 'redux-firestore'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    auth,
    project,
    firestore: firestoreReducer
})

export default rootReducer
