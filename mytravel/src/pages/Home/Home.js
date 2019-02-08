import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { firestoreConnect } from 'react-redux-firebase'

import styles from './Home.module.css'

class Home extends Component {

    componentDidUpdate() {
        const { auth, history } = this.props
        console.log('y', auth)
        if (auth.isEmpty) {
            history.push('/login')
        }
    }

    render() {
        const { projects } = this.props
        return (
            <div className={styles.root}>
                
                <p className={styles.main}>HOME PAGEEE HOME PAGEEE HOME PAGEEE HOME PAGEEE</p>
                {projects ? (
                    projects.map(({ id, title }) => {
                        return (
                            <Link to={`/travels/${id}`} key={id}>
                                <div>{title}</div>
                            </Link>
                        )
                    })
                ) : (
                    <div>Loading</div>
                )}
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log('home', state)
    return {
        auth: state.firebase.auth,
        projects: state.firestore.ordered.projects
    }
}

const componentWithRouter = withRouter(Home)
export default compose(
    connect(
        mapStateToProps,
        null
    ),
    firestoreConnect([{ collection: 'projects' }])
)(componentWithRouter)
