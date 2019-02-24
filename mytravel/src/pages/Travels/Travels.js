import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { firestoreConnect } from 'react-redux-firebase'

import styles from './Travels.module.css'

class Travels extends Component {

    render() {
        const { travels } = this.props  
        return (  
            <div className={styles.root}>
                <div className={styles.cardsCover}>
                {console.log('PROJ:',travels)}
                    {
                        travels ?
                        travels.map(({ id, title, content }) => {
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
        ...state,
        auth: state.firebase.auth,
        travels: state.firestore.data.projects && state.firestore.data.projects[state.firebase.auth] && state.firestore.data.projects[state.firebase.auth].travels
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
        }],
        ko: console.log('CONNECT PROPS:',props)
    }])
)(componentWithRouter)
