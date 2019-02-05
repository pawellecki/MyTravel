import React from 'react'

const Button = React.memo( ({title, type}) => (
    <button type={type}>
        {title}
    </button>
))

export default Button