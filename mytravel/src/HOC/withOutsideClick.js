import React, { Component } from 'react'

const withOutsideClick = WrappedComponent => {
    class Enhance extends Component {
        
        state = {
            isOpen: false
        }
        
        render() {
            const { isOpen } = this.state
            return (
                <WrappedComponent
                    {...this.props}
                    isOpen={isOpen}
                    handleToggleOpen={this.handleToggleOpen}
                />
            )
        }

        handleToggleOpen = () => {
            this.setState({
                isOpen: !this.state.isOpen
            })
            document.addEventListener('click', this.handleClick, false)
        }

        handleClick = e => {
            const targetIsNotIgnored = !e.target.classList.contains('ignore') || !e.target.parentNode.classList.contains('ignore')

            if (targetIsNotIgnored) {
                this.setState({
                    isOpen: false
                })
            }
            document.removeEventListener('click', this.handleClick, false)
        }
    }

    return Enhance
}

export default withOutsideClick
