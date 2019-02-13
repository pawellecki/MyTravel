import React, { Component } from 'react'
import { connect } from 'react-redux'

import { logOut } from '../../store/actions/auth'

import Header from './Header'

class HeaderContainer extends Component {
    render() {
        const { userEmail } = this.props
        return <Header handleLogout={this.handleLogout} userEmail={userEmail} />
    }

    handleLogout = () => {
        const { logOut } = this.props
        logOut()
    }
}

const mapStateToProps = state => {
    return {
        userEmail: state.firebase.auth.email
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logOut: () => dispatch(logOut())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HeaderContainer)
