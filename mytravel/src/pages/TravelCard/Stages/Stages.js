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

const Stages = ({ stages = [], handleChooseOption , handleSetDaysInStage, handleSetInputValue, handleSetStageDefaultState }) => {
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
                <h3>Target</h3>
                <h3>Transport</h3>
                <h3>Price</h3>
            </div>
            {
                stages &&
                stages.map(({ title, dateRange, days }, stageIndex) => {
                    return (
                        <section key={stageIndex}>
                            <h2>{title}</h2> <h2>{dateRange}</h2>
                            {
                                days &&
                                days.map((day, dayIndex) => {
                                    dayOfTravel = dayOfTravel + 1
                                    return (
                                        <div className={styles.column} key={dayIndex}>
                                            <p>{dayIndex + 1} ({dayOfTravel - stageIndex})</p>
                                            <Input
                                                name={"target_" + (dayOfTravel - 1)}
                                                onChange={(event, name) => handleSetInputValue(stageIndex, name, event)}
                                            />
                                            <Dropdown 
                                                options={options}
                                                handleChooseOption={handleChooseOption}
                                            />
                                            <Input 
                                                name={"price_" + (dayOfTravel - 1)}
                                                onChange={(event, name) => handleSetInputValue(stageIndex, name, event)}
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
