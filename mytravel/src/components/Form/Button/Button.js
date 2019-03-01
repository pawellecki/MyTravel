import React from 'react'

import cn from 'classnames'
import styles from './Button.module.css'

const Button = React.memo(
    ({ isLoading, isTab, isDisabled, isFaded, title, onClick, type }) =>
        <button
            className={cn(
                styles.root,
                isLoading ? styles.loading : '',
                isTab ? styles.tab : '',
                isDisabled ? styles.disabled : '',
                isFaded ? styles.faded : ''
            )}
            onClick={onClick}
            type={type}
        >
            {title}
            <div></div>
        </button>
)

export default Button
