import React, { Component } from 'react'
import { connect } from 'react-redux'


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
                date: [null, null]
            }
        ]
    }

    handleChangeName = (e, fieldName) => {
        const index = fieldName
        console.log('e:',e.target.value)
        console.log('fieldNamee:',fieldName)
        const stages = Object.assign(this.state.stages)
        stages[index] = {
            ...stages[index],
            title: e.target.value
        }
        this.setState({ stages })
        // this.setState({
        //     [fieldName]: e.target.value
        // })
    }

    handleSetDateRange = (date, index) => {
        const stages = Object.assign(this.state.stages)
        stages[index] = {
            ...stages[index],
            date
        }
        this.setState({ stages })
    }

    handleSubmit = e => {
        const { addTravel } = this.props
        e.preventDefault()
        console.log('SUBMIT:',this.state)
        addTravel(this.state.stages)
    }
    
    addStage = () => {
        const stateStages = this.state.stages
        const stages = Object.assign(stateStages)
        stages[stateStages.length] = {
            date: null
        }
        this.setState({ stages })
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
                                        onChange={this.handleChangeName}
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
                <Button title="Add" onClick={this.addStage} />
            </div>
        )
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
