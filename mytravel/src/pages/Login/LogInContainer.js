import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import LogIn from './LogIn'

import { logIn, signUp } from '../../store/actions/auth'

class LogInContainer extends Component {
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        isLogIn: true
    }
    
    render() {
        const { isLogIn } = this.state
        const { auth, authError } = this.props
        if (auth.uid) return <Redirect to="/" />

        return (
            <LogIn 
                auth={auth}
                authError={authError}
                isLogIn={isLogIn}
                handleChangeField={this.handleChangeField}
                handleChooseTab={this.handleChooseTab}
                handleSubmit={this.handleSubmit}
            />
        )
    }

    handleChangeField = (e, fieldName) => {
        this.setState({
            [fieldName]: e.target.value
        })
    }
    
    handleChooseTab = logIn => {
        this.setState({
            isLogIn: logIn ? true : false
        })
    }

    handleSubmit = e => {
        const { logIn, signUp } = this.props
        const { isLogIn } = this.state
        e.preventDefault()
        isLogIn ? logIn(this.state) : signUp(this.state)
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
        logIn: credentials => dispatch(logIn(credentials)),
        signUp: newUser => dispatch(signUp(newUser))
    }
}

export default connect(
    mapStatetoProps,
    mapDispatchToProps
)(LogInContainer)
