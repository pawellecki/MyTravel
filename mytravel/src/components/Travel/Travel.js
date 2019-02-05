import React, { Component } from 'react'

class Travel extends Component {

    render() {
        const {title} = this.props
            return (
                <div>{title}</div>
            )
    }
}

export default Travel
