import React from 'react'
// import Button from '../../components/Form/Button/Button'

import styles from './ImageUpload.module.css'

const ImageUpload = ({ handleChange, handleUpload, imageUrl }) => (
    <div className={styles.root}>
        <input type="file" onChange={handleChange} />
        <button onClick={handleUpload}>uploaddd</button>
        {
            imageUrl !== '' &&
            <img
                src={this.state.imageUrl}
                alt="uploaded"
                height="300"
                width="400"
            />
        }
    </div>
)

export default ImageUpload
