import { types } from '../../types/types'

export default (state: any, action: any) => {
  switch(action.type) {
    case types.uiLinkSelect:
      return {
        ...state,
        linkSelect: action.payload
      }

    default:
      return state;
  }
}