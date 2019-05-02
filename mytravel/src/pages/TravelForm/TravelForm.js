import React, { Component } from 'react'
import { connect } from 'react-redux'

import { countDays } from '../../helpers/date'

import moment from 'moment'

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
                date: [null, null],
                days: []
            }
        ]
    }

    render() {
        return (
            <div className={styles.root}>
                <form onSubmit={this.handleSubmit}>
                    <h5>Create a New Project</h5>
                    {
                        this.state.stages.map((stage, index) => {
                            return (
                                <span key={index}>
                                    <Input
                                        onChange={this.handleSetName}
                                        name={index}
                                        label="The title"
                                    />
                                    <DateRangePicker
                                        onChange={date => this.handleSetDateRange(date, index)}
                                        value={this.state.stages[index].date}
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
        const { addTravel } = this.props
        e.preventDefault()
        let days = []
        // JAKI FORMAT CZASU? SEKUNDY? C OTRAFIA DO HELPERA?
        this.state.stages.map(stage => {
            const kot = Array.from({ length: countDays(stage) }).map(day => {
                return "yyy"
            })
            console.log('stage:',stage)
            console.log('countDays(stage):',countDays(stage))
            return (
                days = Array.from({ length: countDays(stage) }).map(day => {
                    return "yyy"
                })
                
            )
        })
        // console.log('stages:',stages)
        console.log('days:',days)
        // addTravel(stages)
    }

    handleAddStage = () => {
        const stateStages = this.state.stages
        const stages = Object.assign(stateStages)
        stages[stateStages.length] = {
            date: null
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
        const stages = Object.assign(this.state.stages)
        stages[index] = {
            ...stages[index],
            date
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
