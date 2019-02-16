import React from 'react'

import styles from './Button.module.css'

const Button = React.memo( ({ title, type, onClick, isTab, isDisabled }) => 
    <button 
        onClick={onClick} 
        type={type} 
        className={`
            ${styles.root} 
            ${isTab ? styles.tab : ''}
            ${isDisabled ? styles.disabled : ''}
        `}
    >
        {title}
    </button>
)

export default Button
