import React from 'react'

import { getExtreme } from '../../helpers/int'
import ImageUpload from '../../components/ImageUpload/ImageUploadContainer'
import Tabs from '../../components/Tabs/TabsContainer'
import NamesChain from '../../components/NamesChain/NamesChain'

import idx from 'idx'
import styles from './TravelCard.module.css'

import moment from 'moment'

const TravelCard = ({ tabsConfig, ActiveTabComponent, baseTravelData: { authId, mainImageUrl, stages }, handleShowSecttion, handleImageAction }) => {
    return (
        <div className={styles.root}>
            <div className={styles.card}>
                <header>
                    <ImageUpload
                        storagePath={authId}
                        handleImageAction={handleImageAction}
                        imageUrl={mainImageUrl}
                    />
                    <div className={styles.brief}>
                        <NamesChain list={stages} />
                        {
                            stages &&
                            renderTravelTimeRange(stages)
                        }
                        
                    </div>
                </header>
                <section>
                    <Tabs 
                        config={tabsConfig}
                        handleChangeView={handleShowSecttion}
                    />
                </section>
                <section>
                    <ActiveTabComponent />
                </section>
            </div>
        </div>
    )
}

const renderTravelTimeRange = stages => {
    let timeRanges = []
console.log('stages:',stages)
    stages.map(stage => {
        let startDate = idx(stage, _ => _.date[0].seconds)
        let endDate = idx(stage, _ => _.date[1].seconds)
        return timeRanges = [...timeRanges, startDate, endDate]
    })
    const travelBeginning = getExtreme(timeRanges, 'start')
    const travelEnding = getExtreme(timeRanges)

        
    return moment.unix(travelBeginning).format('MM/DD/YYYY') + ' - ' + moment.unix(travelEnding).format('MM/DD/YYYY')
} 

export default TravelCard
