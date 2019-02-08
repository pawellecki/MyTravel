import React from 'react'
import { Link } from 'react-router-dom'

import Button from '../Form/Button/Button'

import styles from './Header.module.css'

const Header = props => (
    <div className={styles.root}>
        <Link to={'/new-travel'}>
            <Button title="Add new travel" />
        </Link>
        LOGO here
        <div className={styles.button}>
            <Button title="Log out" onClick={props.handleLogout} />
        </div>
    </div>
)

export default Header
