import React from 'react'

const Input = ({type = 'text', name, onChange, label}) => (
    <>
        <input 
            type={type}
            onChange={event  => onChange(event, name)} 
            id={name}
        />
        <label htmlFor={name}>{label}</label>
    </>
)

export default Input