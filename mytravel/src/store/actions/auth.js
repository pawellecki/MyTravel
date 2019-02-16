import * as actionTypes from '../../constants/actionTypes'

export const logIn = credentials => {
    
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase()

        firebase
            .auth()
            .signInWithEmailAndPassword(credentials.email, credentials.password)
            .then(() => {
                dispatch({ type: actionTypes.LOGIN_SUCCESS })
            })
            .catch(err => {
                dispatch({ type: actionTypes.LOGIN_ERROR })
            })
    }
}

export const logOut = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase()

        firebase
            .auth()
            .signOut()
            .then(() => {
                dispatch({ type: actionTypes.LOGOUT_SUCCESS })
            })
    }
}

export const signUp = newUser => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase()
        const firestore = getFirestore()

        firebase
            .auth()
            .createUserWithEmailAndPassword(newUser.email, newUser.password)
            .then(resp => {
                return firestore
                    .collection('users')
                    .doc(resp.user.uid)
                    .set({
                        firstName: newUser.firstName,
                        lastName: newUser.lastName
                    })
            })
            .then(() => {
                dispatch({ type: actionTypes.SIGNUP_SUCCESS })
            })
            .catch(err => {
                dispatch({ type: actionTypes.SIGNUP_ERROR, err })
            })
    }
}
