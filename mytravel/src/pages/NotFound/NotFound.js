import React, { Component } from 'react'
import { connect } from 'react-redux'
import './NotFound.module.css'
import Button from '../../components/Form/Button/Button'

class NotFound extends Component {
    render() {
        return (
            <div className="container">
                <h5>Log here</h5>
                {/* LINK */}
                <Button title="Go home" />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // createProject: project => dispatch(createProject(project))
    }
}

export default connect(
    null,
    mapDispatchToProps
)(NotFound)
