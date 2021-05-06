import React from 'react'
import './InputSelect.style.css'

type InputSelectProps = (props: {
  value?: string | number | undefined;
  name: string;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
}) => React.ReactElement

const InputSelect = React.memo<InputSelectProps>(({ value, name, onChange }) => {
  return (
    <div className="content">
      <label htmlFor={name}>Edad</label>
      <select
        value={value}
        className="inputSelect"
        name={name}
        onChange={onChange}
        id={name}
      >
        <option value="DEFAULT">Selecciona Edad</option>
        {[...Array(83)].map((x, i) =>
          <option value={`${i + 18}`} key={i + 18} >{i + 18} años</option>
        )}
      </select>
    </div>
  )
})

export default InputSelect
