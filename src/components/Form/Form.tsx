import React, { useContext, useState } from 'react'
import EventsContext from '../../context/events/EventsContext'
import { useForm } from '../../hooks/useForm'
import Input from '../../components/ui/inputs/Input'
import InputSelect from '../../components/ui/inputs/InputSelect'
import Button from '../../components/ui/Button'
import Modal from '../../components/ui/Modal'
import './Form.style.css'

const Form = () => {
  // Manejo del state Modal
  const [showModal, setShowModal] = useState(false)

  // Manejo del state Errors
  const [showErrors, setShowErrors] = useState(false)

  // extraer los valores del context
  const eventsContext = useContext(EventsContext);
  const { linkSelect }: any = eventsContext;

  // valores iniciales del useForm
  const {formulario, handleChange, reset } = useForm({
    Name: '',
    Email: '',
    Cellphone: '',
    Age: ''
  });

  // Destructuración de formulario
  const { Name, Email, Cellphone, Age }: any = formulario;

  // Evento submit del formulario
  const handleSubmit = ( event: React.FormEvent) => {
    event.preventDefault();
    // Errores por defecto
    const errors = { name: false, email: false, cellphone: false, age: false }

    // Validacion del input Name
    if ( /[a-zA-Z]/.test(Name) ) { errors.name = true }
    else { errors.name = false }

    // Validacion del input Email
    if ( /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(Email) ) { errors.email = true } 
    else { errors.email = false }

    // Validacion del input Cellphone
    if ( /[0-9]/.test(Cellphone) ) { errors.cellphone = true }
    else { errors.cellphone = false }

    // Validacion del input Age
    if ( Age !== 'DEFAULT' ) { errors.age = true }
    else { errors.age = false }

    // Validacion de todos lo inputs
    if ( errors.name && errors.email && errors.cellphone && errors.age ) {
      // Ocultando los errores
      setShowErrors(false)
      // Mostrando el Modal
      setShowModal(true)
      // Imprimiendo el formulario
      console.log(formulario)
      // Reseteando el formulario
      reset()
    } else {
      // Mostrando errores
      setShowErrors(true)
    }
  }

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <h2 className="form__title">Bienvenido a <strong>{linkSelect?.name}</strong></h2>
        { showErrors && <small className="form__errors">Ingrese todos los campos</small> }
        <Input
          type="text"
          placeholder="Nombre completo"
          name="Name"
          onChange={handleChange}
          value={Name}
        />
        <Input 
          type="email"
          placeholder="Correo"
          name="Email"
          onChange={handleChange}
          value={Email}
        />
        <Input 
          type="text"
          placeholder="Celular"
          name="Cellphone"
          onChange={handleChange}
          value={Cellphone}
        />
        <InputSelect
          value={Age}
          name="Age"
          onChange={handleChange}
        />
        <Button
          type="submit"
          name="Enviar"
        />
      </form>
      { showModal && <Modal onClick={() => setShowModal(false)} /> }
    </>
  )
}

export default Form
