import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addTravel } from '../../store/actions/project'
import Button from '../../components/Form/Button/Button'
import Input from '../../components/Form/Input/Input'

import styles from './TravelForm.module.css'

class TravelForm extends Component {

    state = {
        title: '',
        content: ''
    }

    handleChange = (e, fieldName) => {
        this.setState({
            [fieldName]: e.target.value
        })
    }

    handleSubmit = e => {
        const { addTravel } = this.props
        e.preventDefault()
        addTravel(this.state)
    }

    render() {
        return (
            <div className={styles.root}>
                <form onSubmit={this.handleSubmit}>
                    <h5>Create a New Project</h5>
                    <Input
                        onChange={this.handleChange}
                        name="title"
                        label="The title"
                    />
                    <Input
                        onChange={this.handleChange}
                        name="content"
                        label="The content"
                    />
                    <Button title="Create project" type="submit" />
                </form>
                <div>--------------------------------------------</div>
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
