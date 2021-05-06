import { mount } from 'enzyme';
import { menuData } from './menuData';
import Menu from './Menu';
import EventsContext from '../../context/events/EventsContext';

describe('Pruebas en <Menu />', () => {
  const changeLinkSelect = jest.fn();

  const wrapper = mount(
    <EventsContext.Provider value={{
      linkSelect: menuData[0],
      changeLinkSelect
    }}>
      <Menu />
    </EventsContext.Provider>
  )

  test('debe de mostrarse correctamente', () => {
    expect( wrapper ).toMatchSnapshot();
  });
})
