import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import idx from 'idx';

import { setTravelMainImage } from '../../store/actions/project'
// import Stages from './Stages/Stages'
// import Places from './Places/Places'
// import EatDrink from './EatDrink/EatDrink'
// import Costs from './Costs/Costs'

import TravelCard from './TravelCard'
import tabsConfig from './tabsConfig'

class TravelCardContainer extends Component {
    
    state = {
        activeTab: tabsConfig.filter(tab => tab.defaultActive)[0].name,
    }

    render() {
        const { baseTravelData } = this.props
        const ActiveTabComponent = tabsConfig.filter(tab => tab.name === this.state.activeTab)[0].component

        return (
            <TravelCard
                tabsConfig={tabsConfig}
                baseTravelData={baseTravelData || {}}
                ActiveTabComponent={ActiveTabComponent}
                handleShowSecttion={this.handleShowSecttion}
                handleImageAction={this.handleSetTravelMainImage}
            />
        )
    }
    
    handleSetTravelMainImage = imageUrl => {
        const { setTravelMainImage, baseTravelData: { authId, id } } = this.props
        setTravelMainImage({ authId, travelId: id, imageUrl})
    }

    handleShowSecttion = name => {
        this.setState({ activeTab: name })

    }
}

const mapStateToProps = (state, ownProps) => {
    const authId = state.firebase.auth.uid
    const travelId = ownProps.match.params.id
    const baseTravelData =  idx(state, _ => _.firestore.data.projects[authId].travels[travelId])

    return {
        authId,
        baseTravelData
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
