import * as actionTypes from '../../constants/actionTypes'

export const createProject = project => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore()
        firestore.collection('projects').add({
            ...project,
            authorName: 'Paw',
            authorLastName: 'Lee',
            authorId: 12345,
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
