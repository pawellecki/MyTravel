import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'

// import { countStageDays } from '../../../helpers/date'

import idx from 'idx';

import Stages from './Stages'


class StagesContainer extends Component {

    // state = {
    //     stages: []
    // }

    // componentDidUpdate(prevProps) {
    //     if (prevProps.baseTravelData !== this.props.baseTravelData) {
    //         console.log('udpateee:',)
    //         const kot = Array.from({ length: countStageDays(stage) }).map(day => {
    //             return "yyy"
    //         })
    //         // const stagesWithDays
    //         this.setState({
    //             stages: [...this.props.baseTravelData.stages]
    //         })
    //     }
    // }
    
    render() {
        
        const { baseTravelData } = this.props
        console.log('stages:',baseTravelData)

        // const { stages } = this.state
        return (
            <Stages 
                stages={baseTravelData && baseTravelData.stages}
                handleChooseOption={this.handleChooseOption}
            />
        )
    }

    handleChooseOption = option => {
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

    // console.log('state:',state)
    // console.log('ownProps:',ownProps)
    // console.log('travelId:',travelId)

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
