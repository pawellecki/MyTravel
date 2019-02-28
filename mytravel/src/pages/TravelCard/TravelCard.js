import React from 'react'
import ImageUpload from '../../components/ImageUpload/ImageUpload'

const TravelCard = ({travelData}) => {
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
            <ImageUpload />
        </div>
    )
}

export default TravelCard
