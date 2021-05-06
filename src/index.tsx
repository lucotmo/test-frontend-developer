import ReactDOM from 'react-dom';
import EventsState from './context/events/EventsState';
import { App } from './App';

import './styles.css';

ReactDOM.render(
  <EventsState>
    <App />
  </EventsState>,
  document.getElementById('root')
);
