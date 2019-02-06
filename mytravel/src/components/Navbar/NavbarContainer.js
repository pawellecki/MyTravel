import React, { Component } from 'react'
import { connect } from 'react-redux'

// import Button from '../../components/Form/Button/Button'
// import Input from '../../components/Form/Input/Input'

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


export default connect(mapStateToProps)(NavbarContainer)
