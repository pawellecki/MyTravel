import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'

import EatDrink from './EatDrink'


class EatDrinkContainer extends Component {

    render() {
        return (
            <EatDrink />
        )
    }
}

const mapStateToProps = state => {
    return {
    }
}

const mapDispatchToProps = dispatch => {
    return {
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect(props => [{ 
        // collection: 'projects',
        // doc: props.authId,
        // subcollections: [{ collection: 'travels' }]
    }])
)(EatDrinkContainer)
