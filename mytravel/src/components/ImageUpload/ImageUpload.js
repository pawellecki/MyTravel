import React, { Component } from 'react'
import { storage } from '../../config/firebase'
import Button from '../../components/Form/Button/Button'
import Input from '../../components/Form/Input/Input'

import styles from './ImageUpload.module.css'

class ImageUpload extends Component {
    state = {
        image: null,
        imageUrl: ''
    }

    render() {
        // const {  } = this.props

        return (
            <div className={styles.root}>
                <input type="file" onChange={this.handleChange} />
                <button onClick={this.handleUpload}>uploaddd</button>
            </div>
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
        const uploadTask = storage.ref(`images/${image.name}`).put(image)
        uploadTask.on('state_changed', 
        snapshot => {

        }, 
        error => {
            console.log('test:errorrrr',error);
        }, 
        () => {
            storage.ref('images').child(image.name).getDownloadURL().then(url => {
                console.log('test:',url)
            })
        })
    }
}

export default ImageUpload
