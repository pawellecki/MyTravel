import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { firestoreConnect } from 'react-redux-firebase'
import idx from 'idx';

import styles from './Travels.module.css'

class Travels extends Component {

    render() {
        const { travels } = this.props
        const isLoading = !travels && travels !== null
        const noTravels = (travels && travels.length === 0) || travels === null
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
                        travels && travels.length > 0 &&
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
}

const mapStateToProps = state => {
    const travelsCollection = idx(state, _ => _.firestore.data.projects[state.firebase.auth.uid].travels)
    return {
        stateeee: {...state},
        authId: state.firebase.auth.uid,
        travels: travelsCollection && Object.values(travelsCollection)
    }
}

const componentWithRouter = withRouter(Travels)
export default compose(
    connect(
        mapStateToProps,
        null
    ),
    firestoreConnect(props => [{ 
        collection: 'projects',
        doc: props.authId,
        subcollections: [{ collection: 'travels' }]
    }])
)(componentWithRouter)
