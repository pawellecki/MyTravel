import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import withOutsideClick from '../../HOC/withOutsideClick'

import Button from '../Form/Button/Button'

import styles from './Header.module.css'

class Header extends Component {

    render() {
        
        const { userEmail, isOpen, handleToggleOpen, handleLogout } = this.props
        return (
            <div className={styles.root}>
                <Link to={'/new-travel'}>
                    <Button title="Add new travel" />
                </Link>
                LOGO here
                <div className={styles.button}>
                    <p onClick={handleToggleOpen} className='ignore'>
                        {userEmail}
                    </p>
                    {
                        isOpen && 
                        <ul className={styles.settings}>
                            <li className='ignore' onClick={handleLogout}>Logout!</li>
                        </ul>
                    }
                </div>
            </div>
        )
    }

}

export default withOutsideClick(Header)
