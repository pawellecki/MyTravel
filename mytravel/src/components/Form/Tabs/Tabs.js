import React from 'react'

import cn from 'classnames'
import styles from './Tabs.module.css'

const Tabs = React.memo(({ config, isActive, onClick }) => {
    return config.map(tab => {
        return (
            <div
                className={cn(
                    styles.root,
                    isActive ? styles.active : '')
                }
                onClick={onClick}
            >
                {tab.name}
            </div>
        )
    })
})

export default Tabs
