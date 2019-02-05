import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'

import TravelCard from './TravelCard'

class TravelCardContainer extends Component {

    render() {
        const {project} = this.props
    console.log(this.props)

        // console.log("uuuu",this.props.match.params.id)
            return (
                <>
                    {
                        project &&
                        <TravelCard 
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
        project
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects' }
    ])
)(TravelCardContainer)
