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
        return (  
            <div className={styles.root}>
                <div className={styles.cardsCover}>
                    {
                        travels ?
                        travels.map(({ id, title, content }) => {
                            return (
                                <div className={styles.cardPlace} key={title}> 
                                {/* //key?? */}
                                    <Link to={`/travels/${id}`}>
                                        <div className={styles.card}>
                                                  <div className={styles.photo} />
                                                <p>{content}</p>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })
                        : <div>Loading</div>
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const travelsCollection = idx(state, _ => _.firestore.data.projects[state.firebase.auth.uid].travels) || {}
    return {
        authId: state.firebase.auth.uid,
        travels: Object.values(travelsCollection)
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
