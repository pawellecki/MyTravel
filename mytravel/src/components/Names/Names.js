import React from 'react'

import styles from './Names.module.css'

const Names = list => 
    
    <p className={styles.root}>
        {
            list && 
            list.map((el, index) => {
                if (index === el.length - 1) {
                    return el.title
                }
                return (
                    el.title + ' - '
                )
            })
        }
    </p>

export default Names
