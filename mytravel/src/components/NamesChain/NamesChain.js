import React from 'react'

import styles from './NamesChain.module.css'

const NamesChain = ({ list }) => 
    <p className={styles.root}>
        {
            list && 
            list.map((el, index) => {
                if (index === list.length - 1) {
                    return el.title
                }
                return (
                    el.title + ' - '
                )
            })
        }
    </p>

export default NamesChain
