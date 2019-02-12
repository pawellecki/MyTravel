import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { firestoreConnect } from 'react-redux-firebase'

import styles from './Travels.module.css'

class Travels extends Component {

    componentDidUpdate() {
        const { auth, history } = this.props
        if (auth.isEmpty) {
            history.push('/login')
        }
    }

    render() {
        const { projects } = this.props
        return (
            <div className={styles.root}>
            
                <div className={styles.cardsCover}>
                    {
                        projects ?
                        projects.map(({ id, title, content }) => {
                            return (
                                <div className={styles.cardPlace}>
                                    <Link to={`/travels/${id}`} key={id}>
                                        <div className={styles.card}>
                                                <h3>{title}</h3>
                                                <div className={styles.photo} />
                                                <p>{content}</p>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })
                        : <div>Loading</div>
                    }
                    <div style={{clear: 'both'}} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        auth: state.firebase.auth,
        projects: state.firestore.ordered.projects
    }
}

const componentWithRouter = withRouter(Travels)
export default compose(
    connect(
        mapStateToProps,
        null
    ),
    firestoreConnect([{ collection: 'projects' }])
)(componentWithRouter)
