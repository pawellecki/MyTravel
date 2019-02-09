const handleOutsideClick = (target, node, className) => {
    console.log("1111111111",target)
    console.log("222222",node)
    console.log("333333",className)
    // if (!node.contains(target) && !target.classList.contains(className)) {
    //     this.setState({
    //         isSettingsOpen: false
    //     })
    // }
}

export default handleOutsideClick