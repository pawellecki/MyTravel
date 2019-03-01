import React from 'react'

import Button from '../../components/Form/Button/Button'
import Input from '../../components/Form/Input/Input'

import styles from './LogIn.module.css'

import { ReactComponent as World } from '../../assets/icons/world.svg'
import customError from '../../helpers/error'

const LogIn = ({ auth, isLogIn, error, handleChangeField, handleChooseTab, handleSubmit }) => {
    const backgroundUrl = "https://firebasestorage.googleapis.com/v0/b/mytravel-96d22.appspot.com/o/global%2Flogin-background-3680.jpg?alt=media&token=3dff8e09-a891-41b3-9feb-f88be84dcbb4"
    
    return (
        <>
            <img src={backgroundUrl} className={styles.image} alt='background' />
            <div className={styles.root}>
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
