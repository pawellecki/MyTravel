import React from 'react'

import Tabs from '../../components/Form/Tabs/TabsContainer'
import Button from '../../components/Form/Button/Button'
import Input from '../../components/Form/Input/Input'
import tabsConfig from './config'

import styles from './LogIn.module.css'

import { ReactComponent as World } from '../../assets/icons/world.svg'
import customError from '../../helpers/error'

const LogIn = ({ auth, isLogIn, isLoading, error, handleChangeField, handleChooseTab, handleSubmit }) => {
    const backgroundUrl = "https://firebasestorage.googleapis.com/v0/b/mytravel-96d22.appspot.com/o/global%2Flogin-background-3680.jpg?alt=media&token=3dff8e09-a891-41b3-9feb-f88be84dcbb4"
    
    return (
        <>
            <img src={backgroundUrl} className={styles.image} alt='background' />
            <div className={styles.root}>
                <div className={styles.tabs}>
                    <Tabs 
                        config={tabsConfig}
                        onClick={handleChooseTab}
                        isActive={isLogIn}
                    />
                </div>
                {
                    auth && auth.isLoaded ?
                    <form onSubmit={handleSubmit} className={isLogIn ? styles.logIn : ''}>
                        <Input
                            onChange={handleChangeField}
                            name="email"
                            label="Emaillll"
                            isRequired
                        />
                        <Input
                            onChange={handleChangeField}
                            name="password"
                            label="Passworddd"
                            type="password"
                            isRequired
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
                            isLoading={isLoading}
                        />
                        {
                            error && 
                            <p className={styles.error}>{customError(error)}</p>
                        }
                    </form>
                    :
                    <div className={styles.loader}><World /></div>
                }
            </div>
        </>
    )
}

export default LogIn
