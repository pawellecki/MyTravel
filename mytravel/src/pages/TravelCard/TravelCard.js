import React from 'react'

import { getExtremes } from '../../helpers/int'
import ImageUpload from '../../components/ImageUpload/ImageUploadContainer'
import Tabs from '../../components/Tabs/TabsContainer'
import NamesChain from '../../components/NamesChain/NamesChain'

import idx from 'idx'
import styles from './TravelCard.module.css'

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
    // const arrayOfTimeRanges = stages.reduce((output, range) => {
    //     console.log('test:',range)
    //     let startDate = range.date[0].seconds
    //     let endDate = range.date[1].seconds
    //     output = [...output, startDate, endDate]
    //     return output
    // }, [])
    let timeRanges = []
    console.log('yy:',stages)
    // stages.map(stage => {
    //     return [...timeRanges, ...stage.date]
    // })
    stages.map(stage => {
        let startDate = idx(stage, _ => _.date[0].seconds)
        let endDate = idx(stage, _ => _.date[1].seconds)
    //     let endDate = range.date[1].seconds
        return timeRanges = [...timeRanges, startDate, endDate]
    })
        
    

    return getExtremes(timeRanges)
} 

export default TravelCard
