import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'

import idx from 'idx';

import Stages from './Stages'


class StagesContainer extends Component {

    state = {
        transport: ""
    }

    render() {
        const { baseTravelData } = this.props
        
        return (
            <Stages 
                baseTravelData={baseTravelData}
                handleChooseOption={this.handleChooseOption}
            />
        )
    }

    handleChooseOption = option => {
        console.log('test:',option)
        this.setState({
            transport: option
        })
    }
}
    
const mapStateToProps = (state, ownProps) => {
    
    const authId = state.firebase.auth.uid
    const travelId = ownProps.travelId
    // const stages =  idx(state, _ => _.firestore.ordered.projects[0].stages)
    const baseTravelData =  idx(state, _ => _.firestore.data.projects[authId].travels[travelId])

    console.log('state:',state)
    console.log('ownProps:',ownProps)
    console.log('travelId:',travelId)

    return {
        authId,
        // travelId,
        // stages
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
        subcollections: [{ collection: 'travels' }]
        // subcollections: [{ collection: 'travels', doc: props.travelId }]
    }]),
)(StagesContainer)
