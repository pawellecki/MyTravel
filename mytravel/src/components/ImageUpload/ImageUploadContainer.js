import React, { Component } from 'react'
import { storage } from '../../config/firebase'

import ImageUpload from './ImageUpload'

class ImageUploadContainer extends Component {
    state = {
        image: null,
        imageUrl: ''
    }

    render() {
        const { imageUrl } = this.state
        
        return (
            <ImageUpload 
                handleChange={this.handleChange}
                handleUpload={this.handleUpload}
                imageUrl={imageUrl}
            />
        )
    }

    handleChange = e => {
        const image = e.target.files[0]
        if (image) {
            this.setState(() => ({
                image
            }))
        }
    }

    handleUpload = () => {
        const { image } = this.state
        const { storagePath } = this.props
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
                this.setState({
                    imageUrl: url
                })
                handle
            })
        })
    }
}

export default ImageUploadContainer
