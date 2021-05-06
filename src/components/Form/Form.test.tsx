import { mount } from 'enzyme';
import Form from './Form';
import { menuData } from '../../components/Menu/menuData';
import EventsContext from '../../context/events/EventsContext';

describe('Pruebas en <Form />', () => {
  const changeLinkSelect = jest.fn();

  const wrapper = mount(
    <EventsContext.Provider value={{
      linkSelect: menuData[0],
      changeLinkSelect
    }}>
      <Form  />
    </EventsContext.Provider>
  )

  test('debe de mostrarse correctamente', () => {
    expect( wrapper ).toMatchSnapshot();
  });
})
