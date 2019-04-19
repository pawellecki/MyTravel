import React from 'react'
import moment from 'moment'

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
                            <h2>{renderTravelTimeRange(baseTravelData.stages)} yy
                                {/* {moment.unix(stage.date[0].seconds).format('MM/DD/YYYY') } - {moment.unix(stage.date[1].seconds).format('MM/DD/YYYY')} */}
                            </h2>
                        </section>
                    )
                })
            }
        </div>
    


export default Stages
