import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { countStageDays } from '../../../helpers/date'


import idx from 'idx';

import Stages from './Stages'


class StagesContainer extends Component {

    state = {
        stages: []
    }

    componentDidUpdate(prevProps, prevState) {
        const { baseTravelData } = this.props
        const loadesStages = baseTravelData.stages
        const firstTimeLoadedStages = prevState.stages.length === 0 && loadesStages && loadesStages.length > 0
        if (firstTimeLoadedStages) {
            let defaultStages = []
            
            console.log('defaultStages:0',defaultStages)
            loadesStages.forEach((stage, index) => {
                console.log('stage', stage)
                defaultStages.push({})
                console.log('index:',index)
                console.log('defaultStages1:',defaultStages)
                // Array.from({ length: countStageDays(stage) }).forEach((day, dayIndex) => {
                //     defaultStages[index].push({})
                // })
                
            })
            console.log('defaultStages2:',defaultStages)
            // this.setState({
            //     stages: [...baseTravelData.stages]
            // })
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
                handleSetStageDefaultState={this.handleSetStageDefaultState}
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

    handleSetStageDefaultState = (stageIndex, stageDaysLength) => {
        const { stages } = this.state
        const currentStages = {...stages}
        // const updatedStage = currentStages[stageIndex]
        // this.setState({
        //     stages: [...currentStages, updatedStage]
        // })
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
