import { types } from "../../types/types";
import { menuData } from "../../components/Menu/menuData";
import EventsReducer from "./EventsReducer";

describe('Pruebas en EventsReducer', () => {
  test('debe de retornar el estado por defecto', () => {
    const state = EventsReducer( menuData, {});
    expect( state ).toEqual( menuData );
  });

  test('Debe cambiar el linkSelect', () => {
    const newUiLinkSelect = menuData[1]
    const action = {
      type: types.uiLinkSelect,
      payload: newUiLinkSelect
    }

    const state = EventsReducer( menuData, action );
    expect( state.linkSelect ).toEqual( newUiLinkSelect )
  })
})
