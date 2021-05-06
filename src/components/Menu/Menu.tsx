import { useContext, useState } from 'react';

import EventsContext from '../../context/events/EventsContext';
const {menuData} = require('./menuData')

import './Menu.style.css'

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false)
  
  // Extraer los valores del EventsContext
  const eventsContext = useContext(EventsContext);
  const { linkSelect, changeLinkSelect }: any = eventsContext;

  return (
    <nav className="container">
      <ul className={`menu ${showMenu && 'menu--show'}`} >
        {
          menuData.map((el: any) => {
            return <li 
              className={`menu__link ${el.id === linkSelect.id && 'activelink'}`} 
              key={el.id}
              onClick={() => {
                changeLinkSelect( `${el.id}`, `${el.name}` )
                setShowMenu(false)
              }}
            >{el.name}</li>
          })
        }
      </ul>
      <div className="menu__button" onClick={() => setShowMenu( !showMenu )}>
        <div className="menu__line"></div>
        <div className="menu__line"></div>
        <div className="menu__line"></div>
      </div>
    </nav>
  )
}

export default Menu
