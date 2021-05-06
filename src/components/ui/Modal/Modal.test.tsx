import { shallow } from 'enzyme';
import Modal from './Modal';

describe('Pruebas en <Modal />', () => {
  const wrapper = shallow( <Modal /> );

  test('debe de ocultarse el componente <Modal />', () => {
    wrapper.find('button').simulate('click');
    expect( wrapper.find('Modal').exists() ).toBe(false);
  })
})
