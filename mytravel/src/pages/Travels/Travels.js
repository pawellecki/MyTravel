import React from 'react'
import { Link } from 'react-router-dom'

import styles from './Travels.module.css'

const Travels = ({travels}) => {
    const isLoading = !travels && travels !== null
    const noTravels = (travels && travels.length === 0) || travels === null
    const isAnyTravel = travels && travels.length > 0

    return (
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
                        travels.map(({ id, content }) => {
                            return (
                                <div className={styles.cardPlace} key={id}>
                                    <Link to={`/travels/${id}`}>
                                        <div className={styles.card}>
                                            <div className={styles.photo} />
                                            <p>{content}</p>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
        </div>
    )
}

export default Travels
