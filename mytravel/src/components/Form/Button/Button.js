import React from 'react'

const Button = React.memo( ({ title, type, onClick }) => 
    <button onClick={onClick} type={type}>
        {title}
    </button>)

export default Button
