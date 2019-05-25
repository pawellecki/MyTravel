import React from 'react'

import ImageUpload from '../../components/ImageUpload/ImageUploadContainer'
import Tabs from '../../components/Tabs/TabsContainer'
import NamesChain from '../../components/NamesChain/NamesChain'
import DateRange from '../../components/DateRange/DateRange'

import { countTravelDays } from '../../helpers/date'

import styles from './TravelCard.module.css'

const TravelCard = ({ tabsConfig, ActiveTabComponent, baseTravelData: { authId, mainImageUrl, stages, id }, handleShowSecttion, handleSetMainImage }) =>


    <div className={styles.root}>
        <header>
            <ImageUpload
                storagePath={authId}
                handleImageAction={handleSetMainImage}
                imageUrl={mainImageUrl}
            />
            <div className={styles.brief}>
                <NamesChain list={stages} />
                <DateRange stages={stages} />
                <div>{countTravelDays(stages)} day(s)</div>
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

export default TravelCard
