import React, { Component } from 'react'

import withOutsideClick from '../../../HOC/withOutsideClick'

import Dropdown from "./Dropdown"

class DropdownContainer extends Component {

    state = {
        chosen: " - "
    }

    render() {
        const { options, isOpen, handleToggleOpen } = this.props
        const { chosen } = this.state
        return (
            <Dropdown 
                options={options}
                chosen={chosen}
                isOpen={isOpen}
                handleSetChosen={this.handleSetChosen}
                handleToggleOpen={handleToggleOpen}
            />
        )
    }

    handleSetChosen = option => {
        this.setState({ 
            chosen: option
        })
    }

}
   

export default withOutsideClick(DropdownContainer)
