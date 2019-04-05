import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import withOutsideClick from '../../HOC/withOutsideClick'

import Button from '../Form/Button/Button'
import { ReactComponent as World } from '../../assets/icons/world.svg'

import styles from './Header.module.css'

class Header extends Component {
    render() {
        const { userEmail, isOpen, handleToggleOpen, handleLogout } = this.props
        return (
            <div className={styles.root}>
                <World className={styles.logo} />
                <div className={`${styles.button} ${'ignore'}`} onClick={handleToggleOpen}>
                    <p >
                        {
                            userEmail
                            ? userEmail
                            : "no-user@no-user.example"

                        }
                    </p>
                    {
                        isOpen &&
                        <ul className={styles.settings}>
                            <li className="ignore" onClick={handleLogout}>
                                Logout!
                            </li>
                        </ul>
                    }
                </div>
                <Link to={'/new-travel'} className={styles.add}>
                    <Button title="Add new travel" />
                </Link>
                <Link to={'/'} className={styles.add}>
                    <Button title="See all travels" />
                </Link>
            </div>
        )
    }
}

export default withOutsideClick(Header)
