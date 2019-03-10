import React from 'react'
// import Button from '../../components/Form/Button/Button'

import { ReactComponent as Delete } from '../../assets/icons/close.svg'
import { ReactComponent as Camera } from '../../assets/icons/camera.svg'

import styles from './ImageUpload.module.css'

const ImageUpload = ({imageUrl = '', handleChange, handleDelete }) => (
    <div className={styles.root}>
        {
            imageUrl === '' &&
            <input type="file" ref={node => (this.node = node)} onChange={handleChange} />
        }
        <div className={styles.photo}>
            {
                imageUrl === ''
                ? <Camera />
                : <>
                    <img
                        src={imageUrl}
                        alt="uploaded"
                    />
                    <div className={styles.delete} onClick={handleDelete}>
                        <Delete />
                    </div>
                </>
            }
        </div>
    </div>
)

export default ImageUpload
