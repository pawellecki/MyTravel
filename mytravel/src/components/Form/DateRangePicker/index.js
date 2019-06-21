import React from 'react'
// import DateRangePicker from '@wojtekmaj/react-daterange-picker'

import styles from './DateRangePicker.module.css'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';

const DateRangePickerContainer = ({ onChange, value }) => {
    const selectionRange = value
    const selectionRangeg = {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
    }
    return (
        <div className={styles.root}>
            <div>tu klaendzarz</div>
            {/* <DateRangePicker onChange={onChange} value={value} /> */}
            {console.log('-----VALUE:',value)}
            {/* {console.log('selectionRange:',selectionRange)} */}
            <DateRange
                    ranges={[selectionRange ]}
                    minDate={new Date()}
                    // ranges={[{
                    //     startDate: value[0],
                    //     endDate: value[1],
                    //     key: 'selection'
                    // }]}
                    onChange={onChange}
                    // rangeColors={["yellow", "pink","green"]}
                    // showSelectionPreview={true}
                    // showMonthAndYearPickers={true}
                    // showDateDisplay={true}
                    
                />
        </div>
    )
    }


export default DateRangePickerContainer
