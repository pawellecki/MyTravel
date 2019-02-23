import React, { Component } from 'react'
import ImageUpload from '../../components/ImageUpload/ImageUpload'

class TravelCard extends Component {

    render() {
        const { travelData: { title, content, id }, auth } = this.props
        return (
            <div>
                <div>{title}</div>
                <div>{content}</div>
                <div>{id}</div>
                <ImageUpload />
            </div>
        )
    }
}

export default TravelCard
