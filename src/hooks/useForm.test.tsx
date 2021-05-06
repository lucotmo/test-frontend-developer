import { renderHook, act } from "@testing-library/react-hooks";
import { useForm } from "./useForm";

describe('Pruebas en useForm', () => {
  const initialForm = {
    name: 'lucotmo',
    email: 'lucotmo@gmail.com'
  };

  test('debe de regresar un formulario por defecto', () => {
    const { result } = renderHook( () => useForm(initialForm) );
    const {handleChange, reset, formulario}: any = result.current;

    expect( formulario ).toEqual( initialForm );
    expect( typeof handleChange ).toBe( 'function' );
    expect( typeof reset ).toBe( 'function' );
  });

  test('debe de cambiar el valor del formulario (cambiar name)', () => {
    const { result } = renderHook( () => useForm(initialForm) );
    const {handleChange}: any = result.current;

    act( () => {
      handleChange({
        target: {
          name: 'name',
          value: 'Carlos'
        }
      });
    });

    const  {formulario}: any = result.current;
    expect( formulario ).toEqual( { ...initialForm, name: 'Carlos' } );
  });

  test('debe de re-establecer el formulario con RESET', () => {
    const { result } = renderHook( () => useForm(initialForm) );
    const {handleChange, reset}: any = result.current;

    act( () => {
      handleChange({
        target: {
          name: 'name',
          value: 'Carlos'
        }
      });
      reset()
    });

    const {formulario}: any = result.current;
    expect( formulario ).toEqual( initialForm );
  })
})
