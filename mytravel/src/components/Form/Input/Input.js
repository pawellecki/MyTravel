import React from 'react'

const Input = React.memo( ({type = 'text', name, onChange, label})=> (
    <div>
        <input 
            type={type}
            onChange={e  => onChange(e, name)} 
            id={name}
        />
        <label htmlFor={name}>{label}</label>
    </div>
))

export default Input