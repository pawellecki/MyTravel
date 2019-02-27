import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { firestoreConnect } from 'react-redux-firebase'
import idx from 'idx';

import Travels from './Travels'

class TravelsContainer extends Component {
    render() {
        const { travels } = this.props
        return (  
            <Travels  
                travels={travels} 
            />
        )
    }
}

const mapStateToProps = state => {
    const travelsCollection = idx(state, _ => _.firestore.data.projects[state.firebase.auth.uid].travels)
    return {
        authId: state.firebase.auth.uid,
        travels: travelsCollection && Object.values(travelsCollection)
    }
}

const componentWithRouter = withRouter(TravelsContainer)
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
