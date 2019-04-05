import React from 'react'
import ImageUpload from '../../components/ImageUpload/ImageUploadContainer'
import Tabs from '../../components/Tabs/TabsContainer'

import styles from './TravelCard.module.css'

const TravelCard = ({ baseTravelData, authId, tabsConfig, handleImageAction, handleShowSecttion }) => {
    return (
        <div className={styles.root}>
            <div className={styles.card}>
                <header>
                    <ImageUpload
                        storagePath={authId}
                        handleImageAction={handleImageAction}
                        imageUrl={baseTravelData && baseTravelData.mainImageUrl}
                    />
                    {
                        baseTravelData &&
                        <div className={styles.brief}>
                            {/* <h2>{baseTravelData.title}</h2> nie ma glownego tytulu */}
                            <div>
                                {
                                    baseTravelData.stages.map((stage, index) => {
                                        if (index === baseTravelData.stages.length - 1) {
                                            return stage.title
                                        }
                                        return (
                                            stage.title + ' - '
                                        )
                                    })
                                }
                            </div>
                        </div>
                    }
                </header>
                <section>
                    <Tabs 
                        config={tabsConfig}
                        handleChangeView={handleShowSecttion}
                    />
                </section>
            </div>
        </div>
    )
}

export default TravelCard
