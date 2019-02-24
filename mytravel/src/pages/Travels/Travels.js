import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { firestoreConnect } from 'react-redux-firebase'

import styles from './Travels.module.css'

class Travels extends Component {

    render() {
        const { projects } = this.props  
        return (  
            <div className={styles.root}>
                <div className={styles.cardsCover}>
                {console.log('PROJ:',projects)}
                    {
                        projects ?
                        projects.map(({ id, title, content }) => {
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
                        : <div>Loading</div>
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log('test!!!:',state);
    return {
        auth: state.firebase.auth,
        // projects: (state.firestore.ordered.projects && state.firestore.ordered.projects[0] && state.firestore.ordered.projects[0].travels) || []
        projects: state.firestore.ordered.projects
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
        doc: props.auth.uid,
        subcollections: [{
            collection: 'travels',
        //     // where: [['id', '==', props.auth.uid]] 
        }]
    }])
)(componentWithRouter)
