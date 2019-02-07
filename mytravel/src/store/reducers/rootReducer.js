import { combineReducers } from 'redux'
import auth from './auth'
import project from './project'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
    auth,
    project,
    firestore: firestoreReducer,
    firebase: firebaseReducer
})

export default rootReducer
