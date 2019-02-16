import React from 'react'

import styles from './Button.module.css'

const Button = React.memo( ({ title, type, onClick, isTab, isDisabled, custom }) => 
    <button 
        onClick={onClick} 
        type={type} 
        className={`
            ${styles.root} 
            ${custom} 
            ${isTab ? styles.tab : ''}
            ${isDisabled ? styles.disabled : ''}
        `}
        style={custom}
    >
    {console.log('test:',styles)}
        {title}
    </button>
)

export default Button
