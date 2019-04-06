import React from 'react'
import ImageUpload from '../../components/ImageUpload/ImageUploadContainer'
import Tabs from '../../components/Tabs/TabsContainer'
import Names from '../../components/Names/Names'

import styles from './TravelCard.module.css'

const TravelCard = ({ tabsConfig, activeTabComponent, baseTravelData, handleShowSecttion, handleImageAction }) => {
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
                            <Names list={baseTravelData && baseTravelData.stages} />
                            {/* <div>
                                {
                                    baseTravelData &&
                                    baseTravelData.stages.map((stage, index) => {
                                        if (index === baseTravelData.stages.length - 1) {
                                            return stage.title
                                        }
                                        return (
                                            stage.title + ' - '
                                        )
                                    })
                                }
                            </div> */}
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
                    {activeTabComponent}
                </section>
            </div>
        </div>
    )
}

export default TravelCard
