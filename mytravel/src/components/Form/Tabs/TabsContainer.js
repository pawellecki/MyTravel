import React, { Component } from 'react'

import Tabs from './Tabs'

class TabsContainer extends Component {

    state = {
        activeTab: ''
    }

    componentDidMount() {
        const { config } = this.props
        const defaultActive = config.filter(tab => tab.defaultActive)[0].name

        this.setState({
            activeTab: defaultActive
        })
    }

    render() {
        const { activeTab } = this.state
        const { config } = this.props

        return (
            <Tabs
                activeTab={activeTab}
                config={config}
                handleChooseTab={this.handleChooseTab}
            />
        )
    }

    handleChooseTab = name => {
        const { handleChangeView } = this.props

        this.setState({
            activeTab: name
        })
        handleChangeView(name)
    }
}

export default TabsContainer
