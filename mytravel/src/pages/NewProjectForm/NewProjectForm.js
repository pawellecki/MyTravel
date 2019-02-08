import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { withRouter, Link } from 'react-router-dom'

import { createProject } from '../../store/actions/project'
import Button from '../../components/Form/Button/Button'
import Input from '../../components/Form/Input/Input'

import styles from './NewProjectForm.module.css'

class NewProjectForm extends Component {
    state = {
        title: '',
        content: ''
    }

    componentDidUpdate() {
        const { auth, history } = this.props
        console.log('y', auth)
        if (auth.isEmpty) {
            history.push('/login')
        }
    }

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

const mapStateToProps = state => {
    console.log('new project state', state)
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createProject: project => dispatch(createProject(project))
    }
}

const componentWithRouter = withRouter(NewProjectForm)
export default compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    ),
    firestoreConnect([{ collection: 'projects' }])
)(componentWithRouter)
