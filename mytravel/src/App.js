import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProject } from './store/actions/projectActions'
import Button from './components/Form/Button/Button'
import Input from './components/Form/Input/Input'
import './App.css'

class App extends Component {
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
                    <Button title="Create project" />
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createProject: project => dispatch(createProject(project))
    }
}

export default connect(null, mapDispatchToProps)(App)
