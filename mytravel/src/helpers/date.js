import moment from 'moment'
import idx from 'idx'

import { getExtreme } from './int'

export const renderTravelTimeRange = stages => {
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

const displayNumberOfDays = (startDate, endDate) => {
    const secondsInOneDay = 86400
    return Math.ceil((endDate - startDate) / secondsInOneDay)
}

export const countStageDays = stage => {
    let startDate = idx(stage, _ => _.date[0].seconds)
    let endDate = idx(stage, _ => _.date[1].seconds)
    return displayNumberOfDays(startDate, endDate)
}

export const countTravelDays = (stages = []) => {
    const lastIndex = stages.length - 1
    let startDate = idx(stages[0], _ => _.date[0].seconds)
    let endDate = idx(stages[lastIndex], _ => _.date[1].seconds)
    return displayNumberOfDays(startDate, endDate)
}