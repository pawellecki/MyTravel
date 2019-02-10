import React, { Component } from 'react'
import { connect } from 'react-redux'

import { logout } from '../../store/actions/auth'

import Header from './Header'

class HeaderContainer extends Component {

    render() {
        const { userEmail } = this.props
        return (
            <Header 
                handleLogout={this.handleLogout} 
                userEmail={userEmail}
            />
        )
    }
    
    handleLogout = () => {
        const { logout } = this.props
        logout()
    }
}

const mapStateToProps = state => {
    return {
        userEmail: state.firebase.auth.email
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HeaderContainer)
