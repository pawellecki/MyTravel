import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { Link } from 'react-router-dom'

import { createProject } from '../../store/actions/project'
import Button from '../../components/Form/Button/Button'
import Input from '../../components/Form/Input/Input'

import './NewProjectForm.css'

class NewProjectForm extends Component {
    state = {
        title: '',
        content: ''
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

        const {projects} = this.props
        return (
            <div className="container">
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
                
                {
                    projects &&
                    projects.map(({id, title}) => {
                        return (
                            <Link to={`/travels/${id}`} key={id}>
                                <div>{title}</div>
                            </Link>
                        )
                    })
                }
                {
                    !projects &&
                    <div>Loading</div>
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        projects: state.firestore.ordered.projects
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createProject: project => dispatch(createProject(project))
    }
}

export default compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    ),
    firestoreConnect([{ collection: 'projects' }])
)(NewProjectForm)
