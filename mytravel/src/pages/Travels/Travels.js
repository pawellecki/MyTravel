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
                        projects.map(({ id, title }) => {
                            return (
                                <Link to={`/travels/${id}`} key={id}>
                                    <div className={styles.card}>
                                        <div className={styles.photo} />
                                        <h3>{title}</h3>
                                    </div>
                                </Link>
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
