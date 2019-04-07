import React from 'react'
import ImageUpload from '../../components/ImageUpload/ImageUploadContainer'
import Tabs from '../../components/Tabs/TabsContainer'
import NamesChain from '../../components/NamesChain/NamesChain'

import styles from './TravelCard.module.css'

const TravelCard = ({ tabsConfig, ActiveTabComponent, baseTravelData, handleShowSecttion, handleImageAction }) => {
    return (
        <div className={styles.root}>
            <div className={styles.card}>
                <header>
                    <ImageUpload
                        storagePath={baseTravelData && baseTravelData.authId}
                        handleImageAction={handleImageAction}
                        imageUrl={baseTravelData && baseTravelData.mainImageUrl}
                    />
                    {
                        baseTravelData &&
                        <div className={styles.brief}>
                            {/* <h2>{baseTravelData.title}</h2> nie ma glownego tytulu */}

                            <NamesChain list={baseTravelData.stages} />
                        </div>
                    }
                </header>
                <section>
                    <Tabs 
                        config={tabsConfig}
                        handleChangeView={handleShowSecttion}
                    />
                </section>
                <section>
                    <ActiveTabComponent {...baseTravelData} />
                </section>
            </div>
        </div>
    )
}

export default TravelCard
