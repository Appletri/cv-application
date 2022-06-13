import './styles/App.css';
import React, { useEffect, useState } from 'react';
import GeneralInfo from './components/GeneralInfo';
import EducExp from './components/EducExp';
import WorkExp from './components/WorkExp';
import Skills from './components/Skills';
import arrow from './assets/Arrow-To-icon.png';

function App() {
  const [editState, setEditState] = useState('false')

  const toggleMoreFeatures = () => {
    let state = editState;
    if (state === 'false') {
      state = 'true';
    } else {
      state = 'false';
    }
    
    setEditState(state);
  }

  useEffect (() => {
    const addButts = document.querySelectorAll('.add');
    const removeButts = document.querySelectorAll('.remove');   
    
    if (editState === 'false') {
      addButts.forEach((button) => button.className = 'add hidden');
      removeButts.forEach((button) => button.className = 'remove hidden');
    } else {
      addButts.forEach((button) => button.className = 'add')
      removeButts.forEach((button) => button.className = 'remove')
    }
  }, [editState]);



 return (
  <div className='app'>
    <div className='edit-wrapper'>
      <button className='edit-button' onClick={toggleMoreFeatures}>
        <div className='square-icon' />
      </button>
      <div className='tutorial'>
        <img className='arrow' src={arrow} alt='arrow'></img> Click this button to reveal more edit features
      </div>
    </div>
    <div className='cv'>
      <GeneralInfo />
      <div className='info'>
        <div className='left-side'>
          <EducExp />
          <Skills />
        </div>
        <hr></hr>
        <WorkExp />
      </div>
    </div>
  </div>
  );
  
}

export default App;
