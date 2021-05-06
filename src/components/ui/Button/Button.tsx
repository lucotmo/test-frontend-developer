import React from 'react';
import './Button.style.css'

type ButtonProps = (props: {
  type?: 'submit' | 'button';
  name: String;
  onClick?:
    | ((event: React.MouseEvent<HTMLButtonElement>) => void)
    | undefined;
}) => React.ReactElement

const Button: ButtonProps = ({ type = 'button', name, onClick }) => {
  return (
    <button
      className="button"
      type={type}
      onClick={onClick}
    >{name}</button>
  )
}

export default Button
