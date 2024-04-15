import './App.css';

import React, { useState } from 'react';
import BootstrapComponent from './components/Bootstrap';
import AntDesignComponent from './components/Ant';
import MaterialUIComponent from './components/Material';

function App() {

  const [selectedComponent, setSelectedComponent] = useState('Bootstrap');

  const handleSelectComponent = (component) => {
    setSelectedComponent(component);
  };

  return (
    <div className="App">
      <button onClick={() => handleSelectComponent('Bootstrap')}>Bootstrap</button>
      <button onClick={() => handleSelectComponent('AntDesign')}>Ant Design</button>
      <button onClick={() => handleSelectComponent('MaterialUI')}>Material-UI</button>

      <div id='componentContainer'>
        {selectedComponent === 'Bootstrap' && <BootstrapComponent />}
        {selectedComponent === 'AntDesign' && <AntDesignComponent />}
        {selectedComponent === 'MaterialUI' && <MaterialUIComponent />}
      </div>

    </div>
  );
}

export default App;
