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
                    <p 
                        onClick={e => this.handleToggleSettings(e)}
                        ref={node => this.node = node}
                    >
                        {userEmail}
                    </p>
                    {
                        isSettingsOpen && 
                        <ul className={styles.settings}>
                            <li className='ignore'>Logout!</li>
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
        console.log(e)
        console.log("this.node",this.node)
        const { handleLogout } = this.props
        if (this.node.contains(e.target)) {
            handleLogout()
        }
        this.handleOutsideClick(e)
    }

    handleOutsideClick = e => {
        // console.log("E.target",e.target)
        // console.log("this.node",this.node)
        // const ignore = 'ignoreList'
        if (!this.node.contains(e.target) && !e.target.classList.contains(ignore)) {
            this.setState({
                isSettingsOpen: false
            })
        }
    }
}

export default Header
