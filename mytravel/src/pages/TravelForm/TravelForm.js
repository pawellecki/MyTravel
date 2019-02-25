import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addTravel } from '../../store/actions/project'
import Button from '../../components/Form/Button/Button'
import Input from '../../components/Form/Input/Input'
import idx from 'idx';


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

const mapStateToProps = state => {
    console.log('test!!!:',state);
    const travelsCollection = idx(state, _ => _.firestore.data.projects[state.firebase.auth.uid].travels) || {}
    // const travelsCollection = idx(state, _ => _.firestore.data.projects[state.firebase.auth.uid].travels) || {}
    return {
        ...state,
        auth: state.firebase.auth.uid,
        travels: Object.values(travelsCollection)
    }
} 
const mapDispatchToProps = dispatch => {
    return {
        addTravel: project => dispatch(addTravel(project))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TravelForm)
