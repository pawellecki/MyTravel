import React, { Component } from 'react'

import { storage } from '../../config/firebase'

import Button from '../../components/Form/Button/Button'
import Input from '../../components/Form/Input/Input'

import { ReactComponent as World } from '../../assets/icons/world.svg'

import styles from './LogIn.module.css'

class LogIn extends Component {
    render() {
        const { auth, isLogIn, authError, handleChangeField, handleChooseTab, handleSubmit } = this.props


        let url = ''
        storage.ref('global').child('login-background.jpg').getDownloadURL().then(url => url)
        return (
            <div className={styles.root} style={{background: `url(${url})`}}>
                <div>
                    <Button
                        title='Log in!'
                        onClick={() => handleChooseTab(true)}
                        isFaded={!isLogIn}
                        isTab
                    />
                    <Button
                        title='Sign up!'
                        onClick={() => handleChooseTab(false)}
                        isFaded={isLogIn}
                        isTab
                    />
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
