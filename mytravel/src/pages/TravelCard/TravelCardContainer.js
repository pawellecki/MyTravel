import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import idx from 'idx';

// import { setTravelMainImage } from '../../store/actions/auth' ????

import TravelCard from './TravelCard'

class TravelCardContainer extends Component {
    render() {
        const { travel, authId } = this.props
        
        return (
            <TravelCard
                travelData={travel}
                authId={authId}
                handleImageAction={this.handleSetTravelMainImage}
            />
        )
    }
    
    handleSetTravelMainImage = imageUrl => {
        const { setTravelMainImage, authId, travelId } = this.props
        setTravelMainImage({imageUrl, authId, travelId})
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

const mapDispatchToProps = dispatch => {
    return {
        setTravelMainImage: data => dispatch(setTravelMainImage(data))
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect(props => [{ 
        collection: 'projects',
        doc: props.authId,
        subcollections: [{ collection: 'travels' }]
    }])
)(TravelCardContainer)
