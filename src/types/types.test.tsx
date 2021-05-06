import { types } from './types';

describe('Pruebas en Types', () => {
  test('los types deben de ser iguales', () => {
    expect( types ).toEqual({
      uiLinkSelect: '[ui] Link Select',
    })
  })
})
