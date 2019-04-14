import React from 'react'

import ImageUpload from '../../components/ImageUpload/ImageUploadContainer'
import Tabs from '../../components/Tabs/TabsContainer'
import NamesChain from '../../components/NamesChain/NamesChain'
import DateRange from '../../components/DateRange/DateRange'

import styles from './TravelCard.module.css'

const TravelCard = ({ tabsConfig, ActiveTabComponent, baseTravelData: { authId, mainImageUrl, stages }, handleShowSecttion, handleSetMainImage }) => {
    return (
        <div className={styles.root}>
            <header>
                <ImageUpload
                    storagePath={authId}
                    handleImageAction={handleSetMainImage}
                    imageUrl={mainImageUrl}
                />
                <NamesChain list={stages} />
                <DateRange stages={stages} />
            </header>
            <main>
                <Tabs 
                    config={tabsConfig}
                    handleChangeView={handleShowSecttion}
                />
                <ActiveTabComponent />
            </main>
        </div>
    )
}

export default TravelCard
