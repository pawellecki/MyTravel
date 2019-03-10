import React from 'react'
import ImageUpload from '../../components/ImageUpload/ImageUploadContainer'

import styles from './TravelCard.module.css'

const TravelCard = ({travelData, authId, handleImageAction}) => {
    return (
        <div className={styles.root}>
            <div className={styles.card}>
                {
                    travelData &&
                    <span>
                        <div>{travelData.title}</div>
                        <div>{travelData.content}</div>
                    </span>
                }
                {
                    console.log('travelData:',travelData)
                }
                
                <ImageUpload
                    storagePath={authId}
                    handleImageAction={handleImageAction}
                    imageUrl={travelData && travelData.mainImageUrl}
                />
            </div>
        </div>
    )
}

export default TravelCard
