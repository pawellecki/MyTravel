import React from 'react'

import cn from 'classnames'
import styles from './Input.module.css'

const Input = React.memo(({ name, type = 'text', label, isRequired, value, onChange }) => (
    <div 
        className={cn(
            styles.root,
            isRequired ? styles.isRequired : ''
        )}
    >
        <label htmlFor={name}>{label}</label>
        <input
            type={type}
            value={value}
            onChange={e => onChange(e, name)}
            id={name}
        />
    </div>
))

export default Input
