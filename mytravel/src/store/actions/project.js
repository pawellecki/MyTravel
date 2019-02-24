import * as actionTypes from '../../constants/actionTypes'

export const addTravel = project => {
    console.log('CERATE collection Travel:',);

    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore()
        const profile = getState().firebase.profile
        const authorId = getState().firebase.auth.uid
        console.log('authorId:',authorId);
        firestore.collection('projects').doc(authorId).collection('travels').doc().set({
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
