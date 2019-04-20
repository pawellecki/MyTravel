import React from 'react'
import moment from 'moment'

import styles from './Stages.module.css'
import { renderTravelTimeRange } from '../../../helpers/object'

const Stages = ({ baseTravelData }) => 
        <div className={styles.root}>
            {
                baseTravelData &&
                baseTravelData.stages.map((stage, index) => {
                    return (
                        <section key={stage.title}>
                            <h2>{stage.title}</h2>
                            <h2>{renderTravelTimeRange({stages: [stage]})}</h2>
                        </section>
                    )
                })
            }
        </div>
    


export default Stages
