import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { withRouter } from "react-router";

import idx from 'idx';

import Stages from './Stages'


class StagesContainer extends Component {

    render() {
        console.log('testrrrrrr:',this.props)
        return (
            <Stages />
            )
        }
    }
    
const mapStateToProps = (state, ownProps) => {
    
    const authId = state.firebase.auth.uid
    const travelId = ownProps.travelId
    const baseTravelData =  idx(state, _ => _.firestore.ordered.projects[0])
    console.log('state:',state)
    console.log('ownProps:',ownProps)
    console.log('travelId:',travelId)

    return {
        authId,
        travelId,
        baseTravelData
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
        kot: console.log('cccccccc:',props),
        subcollections: [{ collection: 'travels', doc: props.travelId }]
    }]),
)(StagesContainer)
