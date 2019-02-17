import React from 'react'
import styles from './Input.module.css'

const Input = React.memo(({ type = 'text', name, onChange, label }) => (
    <div className={styles.root}>
        <input type={type} onChange={e => onChange(e, name)} id={name} />
        <label htmlFor={name}>{label}</label>
    </div>
))

export default Input
