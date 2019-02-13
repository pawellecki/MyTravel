import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import Button from '../../components/Form/Button/Button'
import Input from '../../components/Form/Input/Input'
import { signUp } from '../../store/actions/auth'

import { ReactComponent as World } from '../../assets/icons/world.svg'

import styles from './SignUp.module.css'

class SignUp extends Component {

    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: ''
    }

    render() {
        const { authError, auth } = this.props
        if (auth.uid) return <Redirect to='/' />
        
        return (
            <div className={styles.root}>
                {
                    auth.isLoaded ?
                    <form onSubmit={this.handleSubmit}>
                        <h5>Sign up here</h5>
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
                        <Input
                            onChange={this.handleChange}
                            name="firstName"
                            label="firstName"
                        />
                        <Input
                            onChange={this.handleChange}
                            name="lastName"
                            label="lastName"
                        />
                        <Button title="Sign up!" type="submit" />
                        {
                            authError && 
                            <div>{authError}</div>
                        }
                    </form>
                    : 
                    <div className={styles.loader}>
                        <World />
                    </div>
                }
            </div>
        )
    }

    handleChange = (e, fieldName) => {
        this.setState({
            [fieldName]: e.target.value
        })
    }

    handleSubmit = e => {
        const { signUp } = this.props
        e.preventDefault()
        signUp(this.state)
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
        signUp: newUser => dispatch(signUp(newUser))
    }
}

export default connect(
    mapStatetoProps,
    mapDispatchToProps
)(SignUp)
