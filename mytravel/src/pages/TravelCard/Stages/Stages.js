import React from 'react'

import styles from './Stages.module.css'
import { renderTravelTimeRange, countTravelDays, countStageDays } from '../../../helpers/date'

import Dropdown from "../../../components/Form/Dropdown/DropdownContainer"
import Input from "../../../components/Form/Input/Input"
import Button from "../../../components/Form/Button/Button"

import { ReactComponent as Car } from '../../../assets/icons/car.svg'
import { ReactComponent as Taxi } from '../../../assets/icons/taxi.svg'
import { ReactComponent as Walk } from '../../../assets/icons/walk.svg'
import { ReactComponent as Train } from '../../../assets/icons/train.svg'
import { ReactComponent as Plane } from '../../../assets/icons/plane.svg'
import { ReactComponent as Bicycle } from '../../../assets/icons/bicycle.svg'
import { ReactComponent as Ufo } from '../../../assets/icons/ufo.svg'

const Stages = ({ stages, handleChooseOption , handleSetInputValue }) => {
    const options = [
        {
            name: "car",
            icon: Car
        },
        {
            name: "taxi",
            icon: Taxi
        },
        {
            name: "walk",
            icon: Walk
        },
        {
            name: "public transport",
            icon: Train
        },
        {
            name: "plane",
            icon: Plane
        },
        {
            name: "bicycle",
            icon: Bicycle
        },
        {
            name: "ufo",
            icon: Ufo
        }
    ]

    let dayOfTravel = 0

    return (
        <div className={styles.root}>
            <div className={styles.columnHeader}>
                <h3>Day</h3>
                <h3>Destination</h3>
                <h3>Transport</h3>
                <h3>Price</h3>
            </div>
           {/* { console.log('---stages:',stages)} */}
            {
                stages &&
                stages.map(({ title, dateRange, days }, stageIndex) => {
                    return (
                        <section key={stageIndex}>
                            {console.log('stageIndex:',stageIndex)}
                            <h2>{title}</h2> <h2>{dateRange}</h2>
                            {
                                days &&
                                days.map(( day, dayIndex) => {
                                    dayOfTravel = dayOfTravel + 1
                                    console.log('day:',day)

                                    return (
                                        <div className={styles.column} key={dayIndex}>
                                            <p>{dayIndex + 1} ({dayOfTravel - stageIndex})</p>
                                            {console.log('value:',day.destination)}
                                            <Input
                                                name='destination'
                                                value={day.destination || 'yy'}
                                                onChange={(event, name) => handleSetInputValue(stageIndex, dayIndex, name , event)}
                                            />
                                            <Dropdown 
                                                options={options}
                                                handleChooseOption={handleChooseOption}
                                            />
                                            <Input
                                                value={day.price || ''}
                                                onChange={(event, name) => handleSetInputValue(stageIndex, dayIndex, name = 'price', event)}
                                            />
                                        </div>
                                    )
                                })
                            }
                        </section>
                    )
                })
            }
        </div>
        
    )
}


export default Stages
