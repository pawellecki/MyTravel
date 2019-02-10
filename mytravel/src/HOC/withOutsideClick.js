import React, { Component } from 'react'

const withOutsideClick = WrappedComponent => {
    class Enhance extends Component {
        
        state = {
            isOpen: false
        }

        render() {
            document.addEventListener('click', this.handleClick, false)
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
        }

        handleClick = e => {
            const targetIsNotIgnored = !e.target.classList.contains('ignore')

            if (targetIsNotIgnored) {
                this.setState({
                    isOpen: false
                })
            }
        }
    }

    return Enhance
}

export default withOutsideClick
