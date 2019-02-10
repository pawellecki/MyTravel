import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Button from '../Form/Button/Button'

import styles from './Header.module.css'

class Header extends Component {

    state = {
        isSettingsOpen: false
    }

    render() {
        document.addEventListener('click', this.handleClick, false)
        const { isSettingsOpen } = this.state
        const { userEmail } = this.props
        return (
            <div className={styles.root}>
                <Link to={'/new-travel'}>
                    <Button title="Add new travel" />
                </Link>
                LOGO here
                <div className={styles.button}>
                    <p onClick={this.handleToggleSettings}>
                        {userEmail}
                    </p>
                    {
                        isSettingsOpen && 
                        <ul className={styles.settings}>
                            <li className='ignore' ref={node => this.node = node}>Logout!</li>
                        </ul>
                    }
                </div>
            </div>
        )
    }

    handleToggleSettings = () => {
        this.setState({
            isSettingsOpen: !this.state.isSettingsOpen
        })
    }

    handleClick = e => {
        const { handleLogout } = this.props
        if (this.node && this.node.contains(e.target)) {
            handleLogout()
        }
        this.handleOutsideClick(e)
    }

    handleOutsideClick = e => {
        if (this.node && !this.node.contains(e.target)) {
            this.setState({
                isSettingsOpen: false
            })
        }
    }
}

export default Header
