import React from 'react'

import styles from './Stages.module.css'
import { renderTravelTimeRange } from '../../../helpers/object'

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
                            <div>a tu notatk iitd</div>
                            <Dropdown 
                                options={options}
                                handleChooseOption={handleChooseOption}
                            />
                        </section>
                    )
                })
            }
        </div>
        
    )
}


export default Stages
