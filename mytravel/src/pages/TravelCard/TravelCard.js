import React from 'react'

import ImageUpload from '../../components/ImageUpload/ImageUploadContainer'
import Tabs from '../../components/Tabs/TabsContainer'
import NamesChain from '../../components/NamesChain/NamesChain'
import DateRange from '../../components/DateRange/DateRange'

import styles from './TravelCard.module.css'

const TravelCard = ({ tabsConfig, ActiveTabComponent, baseTravelData: { authId, mainImageUrl, stages, id }, handleShowSecttion, handleSetMainImage }) => {
    return (
        <div className={styles.root}>
            <header>
                {console.log('baseTravelData:',id)}
                <ImageUpload
                    storagePath={authId}
                    handleImageAction={handleSetMainImage}
                    imageUrl={mainImageUrl}
                />
                <div className={styles.brief}>
                    <NamesChain list={stages} />
                    <DateRange stages={stages} />
                </div>
            </header>
            <main>
                <Tabs 
                    config={tabsConfig}
                    handleChangeView={handleShowSecttion}
                />
                <ActiveTabComponent travelId={id} />
            </main>
        </div>
    )
}

export default TravelCard
