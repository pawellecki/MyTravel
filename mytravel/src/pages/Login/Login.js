import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from '../../components/Form/Button/Button'
import Input from '../../components/Form/Input/Input'
import './Login.module.css'
import { signIn } from '../../store/actions/auth'

class Login extends Component {
    state = {
        email: '',
        password: ''
    }

    handleChange = (event, fieldName) => {
        this.setState({
            [fieldName]: event.target.value
        })
    }

    handleSubmit = event => {
        const { signIn } = this.props
        event.preventDefault()
        signIn(this.state)
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <h5>Log here</h5>
                    <Input
                        onChange={this.handleChange}
                        name="email"
                        label="Emaillll"
                    />
                    <Input
                        onChange={this.handleChange}
                        name="password"
                        label="Passworddd"
                        type="password"
                    />
                    <Button title="Log In!" type="submit" />
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signIn: credentials => dispatch(signIn(credentials))
        // createProject: project => dispatch(createProject(project))
    }
}

export default connect(
    null,
    mapDispatchToProps
)(Login)
