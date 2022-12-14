import { data } from './data';
import React from 'react';
import Menu from './Menu';
import Buttons from './Buttons';
import { useState } from 'react';
import Slides from './Slides';



function Home() {
    const [menu, setMenu] = useState(data);
    const chosenMenu = (searchTerm) => {
      const newMenu = data.filter(element => element.searchTerm === searchTerm);
      setMenu(newMenu);    
    }

    return (
        <div>
          <Buttons filteredMenu={chosenMenu}/>
          <Menu menuItems={menu} />
          <Slides />
        </div>
      );
}

export default Home;