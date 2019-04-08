import React from 'react'
import ImageUpload from '../../components/ImageUpload/ImageUploadContainer'
import Tabs from '../../components/Tabs/TabsContainer'
import NamesChain from '../../components/NamesChain/NamesChain'

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
                    {
                        <div className={styles.brief}>
                            {/* <h2>{baseTravelData.title}</h2> nie ma glownego tytulu */}

                            <NamesChain list={stages} />
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
                    <ActiveTabComponent />
                </section>
            </div>
        </div>
    )
}

export default TravelCard
