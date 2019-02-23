import * as actionTypes from '../../constants/actionTypes'

export const createProject = (project, uid) => {
    console.log('uid:',uid);
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore()
        const profile = getState().firebase.profile
        const authorId = getState().firebase.auth.uid
        firestore.collection('projects').doc(uid).set({
            ...project,
            authorName: profile.firstName,
            authorLastName: profile.lastName,
            authorId,
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
