import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { Link } from 'react-router-dom'

import { createProject } from '../../store/actions/project'
import Button from '../../components/Form/Button/Button'
import Input from '../../components/Form/Input/Input'

import styles from './NavbarContainer.module.css'

class NavbarContainer extends Component {

    render() {

        return (
            <div className={styles.root}>
            navbarrr
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {

    }
}

// const mapDispatchToProps = dispatch => {
//     return {
//     }
// }

export default compose(
    connect(
        mapStateToProps,
        null
        // mapDispatchToProps
    ),
    firestoreConnect([{ collection: 'projects' }])
)(NavbarContainer)
