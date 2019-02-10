import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'

import { createProject } from '../../store/actions/project'
import Button from '../../components/Form/Button/Button'
import Input from '../../components/Form/Input/Input'

import styles from './TravelForm.module.css'

class TravelForm extends Component {
    state = {
        title: '',
        content: ''
    }

    // componentDidUpdate() {
    //     const { auth, history } = this.props
    //     if (auth.isEmpty) {
    //         history.push('/login')
    //     }
    // }

    handleChange = (event, fieldName) => {
        this.setState({
            [fieldName]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.createProject(this.state)
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

// const mapStateToProps = state => {
//     return {
//         auth: state.firebase.auth
//     }
// }

const mapDispatchToProps = dispatch => {
    return {
        createProject: project => dispatch(createProject(project))
    }
}

export default 
compose(
    connect(null, mapDispatchToProps),
    firestoreConnect([{ collection: 'projects' }])
)(TravelForm)