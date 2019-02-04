import React from 'react'

const Button = React.memo( ({title}) => (
    <button>{title}</button>
))

export default Button