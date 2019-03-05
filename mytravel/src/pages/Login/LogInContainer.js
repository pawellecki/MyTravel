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
        isLogIn: true,
        // isLoading: false
    }
    // componentDidUpdate = (prevProps, prevState) => {
    //   if (this.state.isLoading === true && this.props.error !== null) {
    //     this.setState({
    //         isLoading: false
    //     })
    //   }
    //   if (prevProps.error !== null && this.props.error === null) {
    //     this.setState({
    //         isLoading: true
    //     })
    //   }
    // }
    
    
    render() {
        const { isLogIn, isLoading } = this.state
        const { auth, error } = this.props
        
        if (auth.uid) return <Redirect to="/" />

        return (
            <LogIn 
                auth={auth}
                error={error}
                isLogIn={isLogIn}
                isLoading={isLoading}
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
        console.log('test:',)
        this.setState({
            isLogIn: logIn ? true : false
        })
    }

    handleSubmit = e => {
        const { logIn, signUp } = this.props
        const { isLogIn } = this.state
        e.preventDefault()
        isLogIn ? logIn(this.state) : signUp(this.state)
            // this.setState({
            //     isLoading: true
            // })
    }
}

const mapStatetoProps = state => {
    return {
        kot: console.log("login state",state),
        auth: state.firebase.auth,
        error: state.auth.authError
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
