import React from 'react'

import styles from './Dropdown.module.css'

const Dropdown = React.memo(({ options, Icon, handleChooseOption }) => (
    <ul className={styles.root}>
        {   
            options &&
            options.map((option, index) => {
                return (
                    <li onClick={() => handleChooseOption(index, option.name, )} key={index}>
                        {
                            Icon &&
                            <Icon />
                        }
                        <p>{option.name}</p>
                    </li>
                )
            })
        }
    </ul>
))

export default Dropdown
