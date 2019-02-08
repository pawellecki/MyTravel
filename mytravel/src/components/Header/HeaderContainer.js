import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logout } from '../../store/actions/auth'

import Header from './Header'

class HeaderContainer extends Component {
    render() {
        return (
            <Header
                handleLogout={this.handleLogout}
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
        auth: state.firebase.auth
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
