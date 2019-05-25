import React from 'react'
// import DateRangePicker from '@wojtekmaj/react-daterange-picker'

import styles from './DateRangePicker.module.css'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { Calendar } from 'react-date-range';
const DateRangePickerContainer = ({ onChange, value }) => (
    <div className={styles.root}>
        <div>tu klaendzarz</div>
        {/* <DateRangePicker onChange={onChange} value={value} /> */}
        {console.log('value:',value)}
        <Calendar
				ranges={[{
                    startDate: value[0],
                    endDate: value[1]
                }]}
                onChange={onChange}
                
			/>
    </div>
)

export default DateRangePickerContainer
