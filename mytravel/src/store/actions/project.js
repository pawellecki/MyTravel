import * as actionTypes from '../../constants/actionTypes'
import createRandomString from '../../helpers/string'

export const addTravel = project => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore()
        const profile = getState().firebase.profile
        const authorId = getState().firebase.auth.uid
        const email = getState().firebase.auth.email
        const randomId = createRandomString()

        firestore
        .collection('projects').doc(authorId)
        .collection('travels').doc(randomId)
        .set({
            ...project,
            id: randomId,
            authorId,
            authorName: profile.firstName,
            authorLastName: profile.lastName,
            email,
            createdAt: new Date(),
        })
        .then(() => {
            dispatch({
                type: actionTypes.CREATE_PROJECT
            });
        })
        .catch(err => {
            dispatch({
                type:  actionTypes.CREATE_PROJECT_ERROR,
                err
            })
        })
    };
};
