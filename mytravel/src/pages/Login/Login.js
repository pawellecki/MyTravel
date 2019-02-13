import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import Button from '../../components/Form/Button/Button'
import Input from '../../components/Form/Input/Input'
import { signIn } from '../../store/actions/auth'

import { ReactComponent as World } from '../../assets/icons/world.svg'

import styles from './Login.module.css'

class Login extends Component {

    state = {
        email: '',
        password: ''
    }

    render() {
        const { authError, auth } = this.props
        if (auth.uid) return <Redirect to='/' />
        return (
            <div className={styles.root}>
                {
                    auth.isLoaded ?
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

export default connect(
    mapStatetoProps,
    mapDispatchToProps
)(Login)
