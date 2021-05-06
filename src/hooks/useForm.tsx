import { ChangeEvent, useCallback, useState } from "react"

/**
 * Trabaja el evento onChange y value de cada input del formulario
 *
 * @param formulario - Array de inputs del formulario
 * *
 * @param handleChange - Manejo del evento change en cada input del formulario
 * *
 * @param reset - Resetea todos los valores del formulario al initState
 *
 * @returns Returna el formulario, handleChange, reset
 */
export const useForm = <T extends Object>(initState: T) => {
  const [formulario, setFormulario] = useState(initState)

  const handleChange = useCallback( ( {target}: ChangeEvent<HTMLInputElement | HTMLSelectElement | undefined> ) => {
    const { name, value } = target
    setFormulario(f => ({ ...f, [name]: value }))
  }, [ setFormulario ]);

  const reset = () => {
    setFormulario(initState)
  }

  return {
    formulario,
    handleChange,
    reset,
    ...formulario
  }
}