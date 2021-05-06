import { useReducer, FunctionComponent } from 'react';
import { types } from '../../types/types'
import EventsContext from './EventsContext';
import EventsReducer from './EventsReducer';

type EventsStateProps = {}

const { menuData } = require('../../components/Menu/menuData')

const EventsState: FunctionComponent<EventsStateProps> = (props) => {
  const initialState = {
    linkSelect: menuData[0]
  }

  // Crear dispatch y state
  const [state, dispatch] = useReducer(EventsReducer, initialState);

  const changeLinkSelect = ( id: string, name: string ) => {
    dispatch({
      type: types.uiLinkSelect,
      payload: { 
        id, 
        name
      }
    })
  }

  return (
    <EventsContext.Provider
      value={{
        linkSelect: state.linkSelect,
        changeLinkSelect
      }}
    >
      {props.children}
    </EventsContext.Provider>
  )
}

export default EventsState;