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

const Stages = ({ stages = [], handleChooseOption , handleSetDaysInStage }) => {
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
                <h3>day</h3>
                <h3>target</h3>
                <h3>transport</h3>
                <h3>price</h3>
            </div>
           {/* { console.log('stages:',stages)} */}
            {
                stages &&
                stages.map((stage, stageIndex) => {
                    handleSetDaysInStage(countStageDays(stage), stageIndex)
                    return (
                        <section key={stageIndex}>
                            <h2>{stage.title}</h2>
                            <h2>{renderTravelTimeRange([stage])}</h2>
                            {/* {console.log('countStageDays(stage):',countStageDays(stage))} */}

                            {
                                Array.from({ length: countStageDays(stage) }).map((day, dayIndex) => {
                                    dayOfTravel = dayOfTravel + 1
                                    return (
                                        <div className={styles.column} key={dayIndex}>
                                            <p>{dayIndex + 1} ({dayOfTravel - stageIndex})</p>
                                            <Input />
                                            <Dropdown 
                                                options={options}
                                                handleChooseOption={handleChooseOption}
                                            />
                                            <Input />
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
