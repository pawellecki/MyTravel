import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import Button from '../../components/Form/Button/Button'
import Input from '../../components/Form/Input/Input'
import './Login.module.css'
import { signIn } from '../../store/actions/auth'

class Login extends Component {
    
    state = {
        email: '',
        password: '',
        isLogged: false
    }
    
    componentDidMount() {
        const { auth } = this.props
        if (auth.isEmpty) {
            this.setState({
                isLogged: false
            })
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.auth !== this.props.auth && !this.props.auth.isEmpty) {
            this.setState({
                isLogged: true
            })
        }
    }

    render() {
        const { authError } = this.props
        const { isLogged } = this.state

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
                {
                    authError && 
                    <div>{authError}</div>
                }
                {
                    // isLogged ?
                    // <Redirect to="/" />
                    // : <div/>
                }
            </div>
        )
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
}

const mapStatetoProps = state => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signIn: credentials => dispatch(signIn(credentials))
    }
}

export default 
connect(
    mapStatetoProps,
    mapDispatchToProps
)(Login)
