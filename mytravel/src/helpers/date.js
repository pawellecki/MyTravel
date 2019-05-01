import moment from 'moment'
import idx from 'idx'

import { getExtreme } from './int'

export const renderTravelTimeRange = (stages: []) => {
    let timeRanges = []
    stages &&
    stages.map(stage => {
        let startDate = idx(stage, _ => _.date[0].seconds)
        let endDate = idx(stage, _ => _.date[1].seconds)
        return timeRanges = [...timeRanges, startDate, endDate]
    })
    const travelBeginning = getExtreme(timeRanges, 'left')
    const travelEnding = getExtreme(timeRanges)

    return moment.unix(travelBeginning).format('MM/DD/YYYY') + ' - ' + moment.unix(travelEnding).format('MM/DD/YYYY')
}

export const countDays = dateRange => {
    const startDate = dateRange.date[0].seconds
    const endDate = dateRange.date[1].seconds
    const secondsInDay = 86400
    return (
        Math.ceil((endDate - startDate) / secondsInDay)
    )
}