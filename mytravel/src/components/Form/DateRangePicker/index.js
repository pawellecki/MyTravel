import React from 'react'
import DateRangePicker from '@wojtekmaj/react-daterange-picker'
import styles from './DateRangePicker.module.css'

const DateRangePickerContainer = ({ onChange, value }) => (
    <div className={styles.root}>
        <DateRangePicker onChange={onChange} value={value} />
    </div>
)

export default DateRangePickerContainer
