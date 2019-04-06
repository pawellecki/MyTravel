import React from 'react'
import ImageUpload from '../../components/ImageUpload/ImageUploadContainer'
import Stages from './Stages/Stages'
import Tabs from '../../components/Tabs/TabsContainer'

import styles from './TravelCard.module.css'

const TravelCard = props => {
    return (
        <div className={styles.root}>
            <div className={styles.card}>
                <header>
                    <ImageUpload
                        storagePath={props.authId}
                        handleImageAction={props.handleImageAction}
                        imageUrl={props.baseTravelData && props.baseTravelData.mainImageUrl}
                    />
                    {
                        props.baseTravelData &&
                        <div className={styles.brief}>
                            {/* <h2>{baseTravelData.title}</h2> nie ma glownego tytulu */}
                            <div>
                                {
                                    props.baseTravelData.stages.map((stage, index) => {
                                        if (index === props.baseTravelData.stages.length - 1) {
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
                        config={props.tabsConfig}
                        handleChangeView={props.handleShowSecttion}
                    />
                </section>
                <section>
                    {console.log('test:',props)}
                    {props.activeTabComponent}
                </section>
            </div>
        </div>
    )
}

export default TravelCard
