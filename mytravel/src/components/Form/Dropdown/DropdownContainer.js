import React, { Component } from 'react'

import withOutsideClick from '../../../HOC/withOutsideClick'

import Dropdown from "./Dropdown"

class DropdownContainer extends Component {

    state = {
        chosenName: " - "
    }

    render() {
        const { options, isOpen, handleToggleOpen } = this.props
        const { chosenName } = this.state
        return (
            <Dropdown 
                options={options}
                chosenName={chosenName}
                isOpen={isOpen}
                handleSetChosen={this.handleSetChosen}
                handleToggleOpen={handleToggleOpen}
            />
        )
    }

    handleSetChosen = name => {
        this.setState({ 
            chosenName: name
        })
    }

}
   

export default withOutsideClick(DropdownContainer)
