import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'

import TravelCard from './TravelCard'

class TravelCardContainer extends Component {
    render() {
        const { project, auth } = this.props
        return (
            <>
                {
                    project &&
                    <TravelCard
                        auth={auth}
                        travelData={project}
                    />
                }
            </>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id
    const projects = state.firestore.data.projects
    const project = projects ? projects[id] : null
    return {
        project,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{ collection: 'projects' }])
)(TravelCardContainer)
