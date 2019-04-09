import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import idx from 'idx';

import EatDrink from './EatDrink'


class EatDrinkContainer extends Component {

    render() {
        return (
            <EatDrink />
        )
    }
}

const mapStateToProps = state => {
    const authId = state.firebase.auth.uid
    const travelsCollection = idx(state, _ => _.firestore.data.projects[authId].travels)

    return {
        authId,
        travels: travelsCollection && Object.values(travelsCollection)
    }
}

const mapDispatchToProps = dispatch => {
    return {
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect(props => [{ 
        collection: 'projects',
        doc: props.authId,
        subcollections: [{ collection: 'travels' }]
    }])
)(EatDrinkContainer)
