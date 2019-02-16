import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import Button from '../../components/Form/Button/Button'
import Input from '../../components/Form/Input/Input'
import { logIn, signUp } from '../../store/actions/auth'

import { ReactComponent as World } from '../../assets/icons/world.svg'

import styles from './SignUp.module.css'

class SignUp extends Component {
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        isLogIn: true
    }

    render() {
        const { authError, auth } = this.props
        const { isLogIn } = this.state
        if (auth.uid) return <Redirect to="/" />

        return (
            <div className={styles.root}>
                <div>
                    <div onClick={() =>this.handleChangeTab(true)}>Log In</div>
                    <div onClick={this.handleChangeTab}>Sign up</div>
                </div>
                {auth.isLoaded ? (
                    <form onSubmit={this.handleSubmit}>
                        <h5>{isLogIn ? 'Log in' : 'Sign up'}</h5>
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
                        {
                            !isLogIn &&
                            <>
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
                            </>
                        }
                        <Button title="Sign up!" type="submit" />
                        {
                            authError &&
                            <div>{authError}</div>
                        }
                    </form>
                ) : (
                    <div className={styles.loader}>
                        <World />
                    </div>
                )}
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

    handleChangeTab(logIn) {
        this.setState({
            isLogIn: logIn ? true : false
        })
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
        signUp: newUser => dispatch(signUp(newUser)),
        logIn: credentials => dispatch(logIn(credentials))
    }
}

export default connect(
    mapStatetoProps,
    mapDispatchToProps
)(SignUp)
