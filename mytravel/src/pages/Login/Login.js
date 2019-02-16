import React, { Component } from 'react'

import Button from '../../components/Form/Button/Button'
import Input from '../../components/Form/Input/Input'

import { ReactComponent as World } from '../../assets/icons/world.svg'

import styles from './LogIn.module.css'

class LogIn extends Component {
    render() {
        const { auth, isLogIn, authError, handleChangeField, handleChooseTab, handleSubmit } = this.props

        return (
            <div className={styles.root}>
                <div>
                    <div onClick={() => handleChooseTab(true)}>Log In</div>
                    <div onClick={() => handleChooseTab(false)}>
                        Sign up
                    </div>
                </div>
                {
                    auth && auth.isLoaded ?
                    <form onSubmit={handleSubmit}>
                        <Input
                            onChange={handleChangeField}
                            name="email"
                            label="Emaillll"
                        />
                        <Input
                            onChange={handleChangeField}
                            name="password"
                            label="Passworddd"
                            type="password"
                        />
                        {
                            !isLogIn &&
                            <>
                                <Input
                                    onChange={handleChangeField}
                                    name="firstName"
                                    label="firstName"
                                />
                                <Input
                                    onChange={handleChangeField}
                                    name="lastName"
                                    label="lastName"
                                />
                            </>
                        }
                        <Button
                            title={isLogIn ? 'Log in!' : 'Sign up!'}
                            type="submit"
                        />
                        {authError && <div>{authError}</div>}
                    </form>
                    :
                    <div className={styles.loader}><World /></div>
                }
            </div>
        )
    }
}

export default LogIn
