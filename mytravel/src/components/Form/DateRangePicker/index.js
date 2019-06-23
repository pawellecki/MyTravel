import React from 'react'
// import DateRangePicker from '@wojtekmaj/react-daterange-picker'

import styles from './DateRangePicker.module.css'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';

const DateRangePickerContainer = ({ onChange, dateRange, minDate }) =>
    <div className={styles.root}>
        <div>tu klaendzarz</div>
        <DateRange
                ranges={[{
                    startDate: dateRange[0],
                    endDate: dateRange[1],
                    key: 'dateRange'
                }]}
                minDate={minDate || new Date()}
                onChange={onChange}
                
            />
    </div>

export default DateRangePickerContainer
