import React from 'react'
import { Link } from 'react-router-dom'

import NamesChain from '../../components/NamesChain/NamesChain'

import { ReactComponent as Camera } from '../../assets/icons/camera.svg'
import styles from './Travels.module.css'

const Travels = ({ travels }) => {
    const isLoading = travels === undefined
    const noTravels = (travels && travels.length === 0) || travels === null
    const isAnyTravel = travels && travels.length > 0
    const backgroundUrl = "https://firebasestorage.googleapis.com/v0/b/mytravel-96d22.appspot.com/o/global%2Fdesk-top-view-min.jpg?alt=media&token=2fe6602e-1dd2-46a4-9fc6-96ba72944625"

    return (
        <>
            <img src={backgroundUrl} className={styles.image} alt='background' />
            <div className={styles.root}>
                    <div className={styles.cardsCover}>
                    
                        {
                            isLoading && 
                            <div> ładujemy yyyyy</div>
                        }
                        {
                            noTravels && 
                            <div>Brak podróży!!!!! dodaj cos</div>
                        }
                        {
                            isAnyTravel &&
                            travels.map(({ id, mainImageUrl, stages }) => {
                                return (
                                    <div className={styles.cardPlace} key={id}>
                                        <Link to={`/travels/${id}`}>
                                            <div className={styles.card}>
                                                <div className={styles.photo}>
                                                    {
                                                        mainImageUrl
                                                        ? <div style={{backgroundImage: `url(${mainImageUrl})`}} />
                                                        : <Camera />
                                                    }
                                                </div>
                                                <NamesChain list={stages} />
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </div>
            </div>
        </>
    )
}

export default Travels
