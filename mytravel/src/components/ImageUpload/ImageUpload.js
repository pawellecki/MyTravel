import React, { Component } from 'react'
import { storage } from '../../config/firebase'
// import Button from '../../components/Form/Button/Button'

import styles from './ImageUpload.module.css'

class ImageUpload extends Component {
    state = {
        image: null,
        imageUrl: ''
    }

    render() {
        return (
            <div className={styles.root}>
                <input type="file" onChange={this.handleChange} />
                <button onClick={this.handleUpload}>uploaddd</button>
                {
                    this.state.imageUrl !== '' &&
                    <img src={this.state.imageUrl} alt='uploaded' height='300' width='400' />
                }
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
                console.log('url:',url)
                this.setState({
                    imageUrl: url
                })
            })
        })
    }
}

export default ImageUpload
