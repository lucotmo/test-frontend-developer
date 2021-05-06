import { createContext } from 'react';

interface EventsContextState {
  linkSelect: {
    id: string;
    name: string
  };
  changeLinkSelect: (id: string, name: string) => void
}

const EventsContext = createContext<EventsContextState | null>(null);

export default EventsContext;