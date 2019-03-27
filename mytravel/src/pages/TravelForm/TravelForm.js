import React, { Component } from 'react'
import { connect } from 'react-redux'
import DateRangePicker from '@wojtekmaj/react-daterange-picker';

import moment from 'moment'

import { addTravel } from '../../store/actions/project'
import Button from '../../components/Form/Button/Button'
import Input from '../../components/Form/Input/Input'
import styles from './TravelForm.module.css'

class TravelForm extends Component {

    state = {
        stages: [
            {
                id: 0,
                title: '',
                date: [null ,new Date()]
            }
        ]
    }

    handleChange = (e, fieldName) => {
        this.setState({
            [fieldName]: e.target.value
        })
    }

    handleSetDateRange = (date, index) => {
        const stages = Object.assign(this.state.stages)
        stages[index] = {
            id: index,
            date
        }
        this.setState({ stages })
    }

    handleSubmit = e => {
        const { addTravel } = this.props
        e.preventDefault()
        console.log('SUBMIT:',this.state)
        addTravel(this.state)
    }

    render() {
        return (
            <div className={styles.root}>
                <form onSubmit={this.handleSubmit}>
                    <h5>Create a New Project</h5>
                    {
                        this.state.stages.map((stage, index) => {
                            console.log('test:',index)
                            console.log('dd:',this.state.stages[index])
                            return (
                                <span key={index}>
                                    <Input
                                        onChange={this.handleChange}
                                        name={'stage_' + index}
                                        label="The title"
                                    />
                                    {console.log('test uyuyu:',this.state.stages[index].date)}
                                    <DateRangePicker
                                        onChange={date => this.handleSetDateRange(date, index)}
                                        value={this.state.stages[index].date}
                                    />
                                </span>
                            )
                        })
                    }
                    
                    <Button title="Create project" type="submit" />
                    <Button title="Add" onClick={this.addStage} />

                </form>
                <div>--------------------------------------------</div>
            </div>
        )
    }

    addStage = () => {

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
