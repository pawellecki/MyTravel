import React from 'react'

import cn from 'classnames'
import styles from './Tabs.module.css'

const Tabs = React.memo(({ config, activeTab, handleChooseTab }) =>
    <div className={styles.root}>
        {
            config.map(tab => {
                return (
                    <div
                        className={cn(
                            styles.tab,
                            tab.name === activeTab ? styles.active : ''
                        )}
                        onClick={() => handleChooseTab(tab.name)}
                        key={tab.name}
                    >
                        {tab.label}
                    </div>
                )
            })
        }
    </div>
)

export default Tabs
