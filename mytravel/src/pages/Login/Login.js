import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import Button from '../../components/Form/Button/Button'
import Input from '../../components/Form/Input/Input'
import './Login.module.css'
import { signIn } from '../../store/actions/auth'

class Login extends Component {
    state = {
        email: '',
        password: ''
    }

    componentDidUpdate(prevProps) {
        if (prevProps.auth !== this.props.auth && !this.props.auth.isEmpty) {
            // przenies uzytkiwnika do home gdy niezalogowany
            this.props.history.push('/')
        }
    }

    render() {
        const { authError } = this.props

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
    console.log("login state",state)
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
const withR = withRouter(Login)
export default connect(
    mapStatetoProps,
    mapDispatchToProps
)(withR)
