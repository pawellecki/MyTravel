import * as actionTypes from '../../constants/actionTypes'
import createRandomString from '../../helpers/string'
import moment from 'moment'

export const addTravel = project => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore()
        const profile = getState().firebase.profile
        const authId = getState().firebase.auth.uid
        const email = getState().firebase.auth.email
        const randomId = createRandomString()
        
        firestore
        .collection('projects').doc(authId)
        .collection('travels').doc(randomId)
        .set({
            ...project,
            dateRange: {
                startDate: moment(project.dateRange.startDate).valueOf(),
                endDate: moment(project.dateRange.endDate).valueOf()
            },
            id: randomId,
            authId,
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

export const setTravelMainImage = ({ authId, travelId, imageUrl }) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        console.log('imageUrl:',imageUrl)   
        console.log('authId:',authId)   
        console.log('travelId:',travelId)   

        const firestore = getFirestore()
        firestore
        .collection('projects').doc(authId)
        .collection('travels').doc(travelId)
        .update({
            mainImageUrl: imageUrl
        })
        .then(() => {
            // dispatch({
            //     type: actionTypes.CREATE_PROJECT
            // });
            console.log('nowy mejnn:',)
        })
        .catch(err => {
            // dispatch({
            //     type:  actionTypes.CREATE_PROJECT_ERROR,
            //     err
            // })
            console.log('nie wyszlooo:',)
        })
    }
}