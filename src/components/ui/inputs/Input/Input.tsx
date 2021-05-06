import React from 'react';
import './Input.style.css'

type InputProps = (props: {
  type: string;
  placeholder?: string;
  name: string;
  onChange: React.ReactEventHandler;
  value: string | number;
}) => React.ReactElement

const Input = React.memo<InputProps>(({ type, placeholder, name, onChange, value }) => {
  return (
    <div className="content">
      <label htmlFor={name}>{placeholder}</label>
      <input
        id={name}
        className="input"
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
      />
    </div>
  )
})

export default Input