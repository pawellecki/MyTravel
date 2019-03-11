import React from 'react'
import ImageUpload from '../../components/ImageUpload/ImageUploadContainer'

import styles from './TravelCard.module.css'

const TravelCard = ({ travelData, authId, handleImageAction }) => {
    return (
        <div className={styles.root}>
            <div className={styles.card}>
                <header>
                    <ImageUpload
                        storagePath={authId}
                        handleImageAction={handleImageAction}
                        imageUrl={travelData && travelData.mainImageUrl}
                    />
                    {
                        travelData &&
                        <div className={styles.brief}>
                            <h2>{travelData.title}</h2>
                            <div>{travelData.content}</div>
                        </div>
                    }
                </header>
            </div>
        </div>
    )
}

export default TravelCard
