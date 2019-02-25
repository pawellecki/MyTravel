import * as actionTypes from '../../constants/actionTypes'

export const addTravel = project => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore()
        const profile = getState().firebase.profile
        const authorId = getState().firebase.auth.uid
        const email = getState().firebase.auth.email
        // const allProjects = getState().firebase
        console.log('getFirestore',getFirestore);
        console.log('firestore',firestore);
        firestore.collection('projects' + authorId + '/travels').add({
            ...project,
            authorName: profile.firstName,
            authorLastName: profile.lastName,
            authorId,
            email,
            createdAt: new Date(),
        }).then(() => {
            dispatch({
                type: actionTypes.CREATE_PROJECT
            });
        }).catch(err => {
            dispatch({
                type:  actionTypes.CREATE_PROJECT_ERROR,
                err
            })
        })
    };
};
