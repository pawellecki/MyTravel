import React from 'react'

import styles from './Stages.module.css'
import { renderTravelTimeRange } from '../../../helpers/object'

import Dropdown from "../../../components/Form/Dropdown/Dropdown"


const Stages = ({ baseTravelData, handleChooseOption }) => {
    const options = [
        {
            name: "auto",
        },
        {
            name: "taxi",
        },
        {
            name: "pieszo",
        },
        {
            name: "transport publiczny",
        },
        {
            name: "samolot",
        },
        {
            name: "rower",
        },
    ]

    return (
        <div className={styles.root}>
            {
                baseTravelData &&
                baseTravelData.stages.map(stage => {
                    return (
                        <section key={stage.title}>
                            <h2>{stage.title}</h2>
                            <h2>{renderTravelTimeRange([stage])}</h2>
                            <div>a tu notatk iitd</div>
                            <Dropdown 
                                options={options}
                                handleChooseOption={handleChooseOption}
                            />
                            <div>-------------------</div>
                        </section>
                    )
                })
            }
        </div>
        
    )
}


export default Stages
