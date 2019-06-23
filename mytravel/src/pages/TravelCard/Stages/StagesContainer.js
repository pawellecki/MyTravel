import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { renderTravelTimeRange, countStageDays } from '../../../helpers/date'


import idx from 'idx';

import Stages from './Stages'


class StagesContainer extends Component {

    state = {
        stages: []
    }

    componentDidMount() {
        const { baseTravelData } = this.props
        const loadedStages = baseTravelData && baseTravelData.stages
        console.log('did mount loadedStages:',loadedStages)

        // this.setState({
        //     stages: loadedStages
        // })
    }
    

    componentDidUpdate(prevProps, prevState) {

        const { baseTravelData } = this.props
        const baseStages = baseTravelData && baseTravelData.stages
        const isLoadedStages = baseStages.length > 0 
        const firstTimeLoadedStages = prevState.stages.length === 0 && isLoadedStages

        
        if (firstTimeLoadedStages) {
            let extendedStages = []
            
            baseStages.forEach((stage, index) => {
                const defaultStage = {
                    days: [],
                    title: stage.title,
                    dateRange: renderTravelTimeRange([stage])
                }
                const defaultDay = {
                    destination_: '',
                    option: null,
                    price: ''
                }

                extendedStages.push(defaultStage)
                extendedStages[index].days = Array(countStageDays(stage)).fill(defaultDay)
            })

            this.setState({
                stages: extendedStages
            })
        }
    }
    
    render() {
        const { stages } = this.state

        return (
            <Stages 
                stages={stages}
                handleChooseOption={this.handleChooseOption}
                handleSetInputValue={this.handleSetInputValue}
            />
        )
    }

    handleChooseOption = option => {
        this.setState({
            transport: option
        })
    }

    handleSetInputValue = (stageIndex, dayIndex, name, event) => {
        console.log('stageIndex:',stageIndex)
        console.log('dayIndex:',dayIndex)
        console.log('name:',name)
        console.log('value:',event.target.value)
        const stateStages = this.state.stages
        const stages = Object.assign(stateStages)
        console.log('1:',stages[stageIndex].days[dayIndex][name])

stages[stageIndex].days[dayIndex][name] = event.target.value
console.log('1222:',stages[stageIndex].days[dayIndex][name])

        this.setState({ stages })
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
