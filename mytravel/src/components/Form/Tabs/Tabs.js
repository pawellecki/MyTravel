import React from 'react'

import cn from 'classnames'
import styles from './Tabs.module.css'

const Tabs = React.memo(({ config, activeTab, handleChooseTab }) =>
    config.map(tab => {
        return (
            <div
                className={cn(
                    styles.root,
                    tab.name === activeTab ? styles.active : ''
                )}
                onClick={() => handleChooseTab(tab.name)}
            >
                {tab.label}
            </div>
        )
    })
)

export default Tabs
