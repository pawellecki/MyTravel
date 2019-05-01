import React from 'react'

import styles from './Dropdown.module.css'

const Dropdown = React.memo(({ options, chosen, handleSetChosen, handleToggleOpen, isOpen }) => (
    <div className={`${styles.root} ${'ignore'}`} onClick={handleToggleOpen}>
        <p >{chosen}</p>
        {
            isOpen &&
            <ul className={styles.root}>
                {   
                    options &&
                    options.map((option, index) => {
                        return (
                            <li 
                                onClick={() => handleSetChosen(index, option.name, )} 
                                className="ignore" 
                                key={index}
                            >
                                {
                                    option.icon &&
                                    <option.icon />
                                }
                                <p>{option.name}</p>
                            </li>
                        )
                    })
                }
            </ul>
        }
    </div>
))

export default Dropdown
