import React from 'react'

import { renderTravelTimeRange } from '../../helpers/date'

import styles from './DateRange.module.css'

const DateRange = ({stages}) =>
    <div className={styles.root}>
        {
            renderTravelTimeRange(stages)
        }
    </div>

export default DateRange
