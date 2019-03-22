import React, { Component } from 'react'
import { connect } from 'react-redux'

import moment from 'moment'
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';

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
                startDate: null,
                endDate: null
            }
        ]
    }

    handleChange = (e, fieldName) => {
        this.setState({
            [fieldName]: e.target.value
        })
    }

    handleSubmit = e => {
        const { addTravel } = this.props
        e.preventDefault()
        console.log('SUBMIT:',this.state)
        addTravel(this.state)
    }

    render() {
        // const { startDate, endDate } = this.state.dateRange
        return (
            <div className={styles.root}>
                <form onSubmit={this.handleSubmit}>
                    <h5>Create a New Project</h5>
                    {
                        this.state.stages.map((stage, index) => {
                            console.log('test:',index)
                            console.log('dd:',this.state.stages[index])
                            return (
                                <>
                                    <Input
                                        onChange={this.handleChange}
                                        name={'stage_' + index}
                                        label="The title"
                                    />
                                    <DateRangePicker
                                        startDate={this.state.stages[index].startDate} // momentPropTypes.momentObj or null,
                                        startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                                        endDate={this.state.stages[index].endDate} // momentPropTypes.momentObj or null,
                                        endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                                        onDatesChange={ ({ startDate, endDate }) => 
                                            this.setState(
                                                {
                                                    stages: [...this.state.stages, this.state.stages[index] = "kk"]
                                                }
                                            )} // PropTypes.func.isRequired,
                                        focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                                        onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                                    />
                                </>
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
