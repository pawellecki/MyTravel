import React from 'react'

import styles from './Stages.module.css'
import { renderTravelTimeRange, countDays } from '../../../helpers/date'

import Dropdown from "../../../components/Form/Dropdown/DropdownContainer"

import { ReactComponent as Car } from '../../../assets/icons/car.svg'
import { ReactComponent as Taxi } from '../../../assets/icons/taxi.svg'
import { ReactComponent as Walk } from '../../../assets/icons/walk.svg'
import { ReactComponent as Train } from '../../../assets/icons/train.svg'
import { ReactComponent as Plane } from '../../../assets/icons/plane.svg'
import { ReactComponent as Bicycle } from '../../../assets/icons/bicycle.svg'
import { ReactComponent as Ufo } from '../../../assets/icons/ufo.svg'

const Stages = ({ baseTravelData, handleChooseOption }) => {
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

    return (
        <div className={styles.root}>
            {
                baseTravelData &&
                baseTravelData.stages.map(stage => {
                    return (
                        <section key={stage.title}>
                            <h2>{stage.title}</h2>
                            <h2>{renderTravelTimeRange([stage])}</h2>
                            <div className={styles.columnHeader}>
                                <h3>day</h3>
                                <h3>target</h3>
                                <h3>transport</h3>
                                <h3>price</h3>
                            </div>
                            
                            {
                                Array.from({ length: countDays(stage) }).map((day, index) => {
                                    return (
                                        <div className={styles.column} key={index}>
                                            <p>{index + 1}</p>
                                            <p>target inp</p>
                                            <Dropdown 
                                                options={options}
                                                handleChooseOption={handleChooseOption}
                                            />
                                            <p>price inp</p>
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
