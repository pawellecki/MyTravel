import React, { Component } from 'react'

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
                <button>uploaddd</button>
            </div>
        )
    }

    handleChange = e => {
        const image = e.target.files[0]
        console.log('test:',image)
        if (image) {
            this.setState(() => ({
                image
            }))
        }
    }
}

export default ImageUpload
