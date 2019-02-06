import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from '../../components/Form/Button/Button'
import Input from '../../components/Form/Input/Input'
import './Login.module.css'

class Login extends Component {

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
                    <h5>Log here</h5>
                    <Input
                        onChange={this.handleChange}
                        name="login"
                        label="Loginnn"
                    />
                    <Input
                        onChange={this.handleChange}
                        name="password"
                        label="Passworddd"
                        type='password'
                    />
                    <Button 
                        title="Log In!" 
                        type='submit'
                    />
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // createProject: project => dispatch(createProject(project))
    }
}

export default connect(null, mapDispatchToProps)(Login)
