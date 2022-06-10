import './styles/App.css';
import { Component } from 'react';
import React from 'react';
import GeneralInfo from './components/GeneralInfo';
import EducExp from './components/EducExp';
import WorkExp from './components/WorkExp';
import Skills from './components/Skills';
import arrow from './assets/Arrow-To-icon.png';

class App extends Component {
  constructor() {
    super();
    this.toggleMoreFeatures = this.toggleMoreFeatures.bind(this);
    this.state = {
      editState:{ state: 'false' }  
    }
  }
  
  toggleMoreFeatures(e) {
    let editState = this.state.editState;
    if (editState.state === 'false') {
      editState.state = 'true';
    } else {
      editState.state = 'false';
    }
    
    this.setState(editState);
  }
  
  render() {
    const addButts = document.querySelectorAll('.add');
    const removeButts = document.querySelectorAll('.remove');
    const editState = this.state.editState;

    if (editState.state === 'false') {
      addButts.forEach((button) => button.className = 'add hidden');
      removeButts.forEach((button) => button.className = 'remove hidden');
    } else {
      addButts.forEach((button) => button.className = 'add')
      removeButts.forEach((button) => button.className = 'remove')
    }
    return (
      <div className='app'>
        <div className='edit-wrapper'>
          <button className='edit-button' onClick={this.toggleMoreFeatures}>
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
}

export default App;
