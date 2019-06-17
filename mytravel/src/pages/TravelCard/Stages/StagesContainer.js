import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'

// import { countStageDays } from '../../../helpers/date'

import idx from 'idx';

import Stages from './Stages'


class StagesContainer extends Component {

    state = {
        stages: []
    }

    componentDidUpdate(prevProps, prevState) {
        const { baseTravelData } = this.props
        if (prevState.stages.length === 0 && baseTravelData.stages && baseTravelData.stages.length > 0) {
            this.setState({
                stages: [...baseTravelData.stages]
            })
        }
    }
    
    
    
    render() {
        const { baseTravelData } = this.props

        return (
            <Stages 
                stages={baseTravelData && baseTravelData.stages}
                handleChooseOption={this.handleChooseOption}
                handleSetDaysInStage={this.handleSetDaysInStage}
                handleSetInputValue={this.handleSetInputValue}
                handleSetDefaultStageState={this.handleSetDefaultStageState}
            />
        )
    }

    handleChooseOption = option => {
        this.setState({
            transport: option
        })
    }

    handleSetDaysInStage = (daysInStage, stageIndex) => {
        console.log('daysInStage:',daysInStage)
        console.log('stageIndex:',stageIndex)

    }

    handleSetInputValue = (stageIndex, name, event) => {
        console.log('value:',event.target.value)
        console.log('name:',name)
        console.log('day:',stageIndex)
    }

    handleSetDefaultStageState = (stageIndex, stageDaysLength) => {
        const { stages } = this.state
        const currentStages = {...stages}
        const updatedStage = currentStages[stageIndex]
        this.setState({
            stages: [...currentStages, updatedStage]
        })
    }
}
    
const mapStateToProps = (state, ownProps) => {
    const authId = state.firebase.auth.uid
    const travelId = ownProps.travelId
    const baseTravelData =  idx(state, _ => _.firestore.data.projects[authId].travels[travelId])

    return {
        authId,
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
