import React from 'react'
import ImageUpload from '../../components/ImageUpload/ImageUploadContainer'

const TravelCard = ({travelData, authId, handleImageAction}) => {
    return (
        <div>
            {
                travelData &&
                <span>
                    <div>{travelData.title}</div>
                    <div>{travelData.content}</div>
                    <div>{travelData.id}</div>
                </span>
            }
            <ImageUpload
                storagePath={authId}
                handleImageAction={handleImageAction}
            />
        </div>
    )
}

export default TravelCard
