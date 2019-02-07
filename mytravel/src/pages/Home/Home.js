import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'

import Navbar from '../../components/Navbar/NavbarContainer'
import Button from '../../components/Form/Button/Button'

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
                <Navbar />
                <Link to={'/new-travel'}>
                    <Button title='Add new travel'/>
                </Link>
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
    console.log('new project state', state)
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
)(componentWithRouter)
