import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addTravel } from '../../store/actions/project'
import DateRangePicker from '../../components/Form/DateRangePicker'
import Button from '../../components/Form/Button/Button'
import Input from '../../components/Form/Input/Input'
import styles from './TravelForm.module.css'

class TravelForm extends Component {

    state = {
        stages: [
            {
                title: '',
                date: [new Date(), new Date()],
                days: []
            }
        ],
        isCalendarOpen: false,
        selection: {
            startDate: new Date(),
            endDate: new Date(),
            key: 'dateRange'
        }
    }

    render() {
        const { stages } = this.state

        return (
            <div className={styles.root}>
                <form onSubmit={this.handleSubmit}>
                    <h5>Create a New Project</h5>
                    {
                        stages.map((stage, index) => {
                            const formerStageEndDate = stages[index - 1] && stages[index - 1].date[1]

                            return (
                                <span key={index}>
                                    <Input
                                        onChange={this.handleSetName}
                                        name={index}
                                        label="The title"
                                    />
                                    <DateRangePicker
                                        onChange={date => this.handleSetDateRange(date, index)}
                                        dateRange={stages[index].date}
                                        minDate={formerStageEndDate}
                                    />
                                </span>
                            )
                        })
                    }
                    
                    <Button title="Create project" type="submit" />
                </form>
                <Button title="Add" onClick={this.handleAddStage} />
            </div>
        )
    }
    
    handleSubmit = e => {
        const { stages } = this.state
        const { addTravel } = this.props
        e.preventDefault()
        addTravel(stages)
    }

    handleAddStage = () => {
        const stateStages = this.state.stages
        const stages = Object.assign(stateStages)
        const formerStageEndDate = stages[stateStages.length - 1].date[1]

        stages[stateStages.length] = {
            date: [formerStageEndDate, null],
            title: ''
        }

        this.setState({ stages })
    }

    handleSetName = (e, fieldName) => {
        const index = fieldName
        const stages = Object.assign(this.state.stages)

        stages[index] = {
            ...stages[index],
            title: e.target.value
        }

        this.setState({ stages })
    }

    handleSetDateRange = (date, index) => {
        const { startDate, endDate } = date.dateRange
        const stages = Object.assign(this.state.stages)

        stages[index] = {
            ...stages[index],
            date: [startDate, endDate]
        }
        this.setState({ stages })
    }
    
}

const mapDispatchToProps = dispatch => {
    return {
        addTravel: project => dispatch(addTravel(project))
    }
}

export default connect(
    null,
    mapDispatchToProps
)(TravelForm)
