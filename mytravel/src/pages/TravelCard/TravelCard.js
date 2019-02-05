import React, { Component } from 'react'

class TravelCard extends Component {

    render() {
        const { travelData: { title, content, id } } = this.props
        return (
            <div>
                <div>{title}</div>
                <div>{content}</div>
                <div>{id}</div>
            </div>
        )
    }
}

export default TravelCard
