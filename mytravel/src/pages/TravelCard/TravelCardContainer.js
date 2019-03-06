import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import idx from 'idx';

import TravelCard from './TravelCard'

class TravelCardContainer extends Component {
    render() {
        const { travel, authId } = this.props
        
        return (
            <TravelCard
                travelData={travel}
                authId={authId}
                handleImageAction={this.handleSetMainImage}
            />
        )
    }
    
    handleSetMainImage = url => {
        console.log('testuuuuuuuuuuuu:',url)
    }
}

const mapStateToProps = (state, ownProps) => {
    const authId = state.firebase.auth.uid
    const travelId = ownProps.match.params.id
    const travel =  idx(state, _ => _.firestore.data.projects[authId].travels[travelId])

    return {
        authId,
        travel
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect(props => [{ 
        collection: 'projects',
        doc: props.authId,
        subcollections: [{ collection: 'travels' }]
    }])
)(TravelCardContainer)
