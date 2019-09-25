import React from 'react'

import styles from './Dropdown.module.css'

const Dropdown = React.memo(({ options, chosenName, isOpen, handleSetChosen, handleToggleOpen }) => {
    const chosenOption = options.filter(option => option.name === chosenName)[0]
    
    return (
        <div className={`${styles.root} ${'ignore'}`} onClick={handleToggleOpen}>
            <p>{chosenOption && <chosenOption.icon />}</p>
            {
                isOpen &&
                <ul className={styles.root}>
                    {   
                        options &&
                        options.map((option, index) => {
                            return (
                                <li 
                                    onClick={() => handleSetChosen(option.name)} 
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
    )
 })

export default Dropdown
