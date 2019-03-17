import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import idx from 'idx';

import { setTravelMainImage } from '../../store/actions/project'

import TravelCard from './TravelCard'
import tabsConfig from './tabsConfig'

class TravelCardContainer extends Component {

    render() {
        const { travel, authId } = this.props
        
        return (
            <TravelCard
                travelData={travel}
                authId={authId}
                tabsConfig={tabsConfig}
                handleImageAction={this.handleSetTravelMainImage}
                handleShowSecttion={this.handleShowSecttion}
            />
        )
    }
    
    handleSetTravelMainImage = imageUrl => {
        const { setTravelMainImage, authId, travelId } = this.props
        setTravelMainImage({ authId, travelId, imageUrl})
    }

    handleShowSecttion = name => {
        console.log('name:',name)

    }
}

const mapStateToProps = (state, ownProps) => {
    const authId = state.firebase.auth.uid
    const travelId = ownProps.match.params.id
    const travel =  idx(state, _ => _.firestore.data.projects[authId].travels[travelId])

    return {
        authId,
        travelId,
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
