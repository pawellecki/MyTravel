import React from 'react'

import styles from './Stages.module.css'
import { renderTravelTimeRange } from '../../../helpers/object'

const Stages = ({ baseTravelData }) => 
        <div className={styles.root}>
            {
                baseTravelData &&
                baseTravelData.stages.map(stage => {
                    return (
                        <section key={stage.title}>
                            <h2>{stage.title}</h2>
                            <h2>{renderTravelTimeRange([stage])}</h2>
                            <div>a tu notatk iitd</div>
                        </section>
                    )
                })
            }
        </div>
    


export default Stages
