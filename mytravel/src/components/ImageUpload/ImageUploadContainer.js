import React, { Component } from 'react'
import { storage } from '../../config/firebase'

import ImageUpload from './ImageUpload'

class ImageUploadContainer extends Component {

    render() {
        const { imageUrl, actionName } = this.props

        return (
            <ImageUpload 
                imageUrl={imageUrl}
                actionName={actionName}
                handleChange={this.handleUpload}
                handleDelete={this.handleDelete}
            />
        )
    }

    handleUpload = e => {
        const image = e.target.files[0]
        const { storagePath, handleImageAction } = this.props
        const uploadTask = storage.ref(`images/${storagePath}/${image.name}`).put(image)

        uploadTask.on('state_changed', 
        snapshot => {

        }, 
        error => {
            console.log('test:errorrrr',error);
        }, 
        () => {
            storage.ref(`images/${storagePath}`).child(image.name).getDownloadURL()
            .then(url => {
                handleImageAction(url)
            })
        })
    }

    handleDelete = () => {
        const {  handleImageAction } = this.props
        handleImageAction('')
    }
}

export default ImageUploadContainer
