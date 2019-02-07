import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logout } from '../../store/actions/auth'

import Button from '../../components/Form/Button/Button'

import styles from './NavbarContainer.module.css'

class NavbarContainer extends Component {
    render() {
        return (
            <div className={styles.root}>
                navbarrr
                <div>
                    <Button title="Log out" onClick={this.handleLogout} />
                </div>
            </div>
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
)(NavbarContainer)
