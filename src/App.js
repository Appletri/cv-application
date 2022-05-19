import './styles/App.css';
import { Component } from 'react';
import React from 'react';
import GeneralInfo from './components/GeneralInfo';
import EducExp from './components/EducExp';
import WorkExp from './components/WorkExp';
import Skills from './components/Skills';
import uniqid from 'uniqid';
import arrow from './assets/Arrow-To-icon.png';

class App extends Component {
  constructor() {
    super();
    this.handleChangeGI = this.handleChangeGI.bind(this);
    this.handleChangeEE = this.handleChangeEE.bind(this);
    this.handleChangeWE = this.handleChangeWE.bind(this);
    this.handleChangeD = this.handleChangeD.bind(this);
    this.handleChangeS = this.handleChangeS.bind(this);
    this.handleAddEE = this.handleAddEE.bind(this);
    this.handleAddWE = this.handleAddWE.bind(this);
    this.handleAddD = this.handleAddD.bind(this);
    this.handleAddS = this.handleAddS.bind(this);
    this.handleRemoveEE = this.handleRemoveEE.bind(this);
    this.handleRemoveWE = this.handleRemoveWE.bind(this);
    this.removeEmptyDetail = this.removeEmptyDetail.bind(this);
    this.toggleMoreFeatures = this.toggleMoreFeatures.bind(this);
    this.state = {
      cvInfo: {
        generalInfo: {
          firstName: 'Your',
          lastName: 'Name',
          title: 'your title',
          email: 'example@email.com',
          phoneNumber: '123-456-7890',
          linkedin: 'linkedin.com/example'
        },      
        educExp: [],
        workExp: [],
        skills: [],
        editState:{ state: 'false' }
      }  
    }
  }

  handleChangeGI(e) {
    const info = this.state.cvInfo.generalInfo;
    info[e.target.name] = e.target.value;
    this.setState(info);
  }

  handleChangeEE(e) {
    const info = this.state.cvInfo.educExp[e.target.id];
    info[e.target.name] = e.target.value;
    this.setState(info);
  }

  handleChangeWE(e) {
    const info = this.state.cvInfo.workExp[e.target.id];
    info[e.target.name] = e.target.value;
    this.setState(info);
  }

  handleChangeD(e) {
    const info = this.state.cvInfo.workExp[e.target.name];
    const infoDetail = findItem(info.details)
    infoDetail.detail = e.target.value;
    this.setState(info);

    function findItem(arr) {
      return arr.find( ({ id }) => id === e.target.id )
    }
  }
  
  handleChangeS(e) {
    const info = this.state.cvInfo.skills;
    info[e.target.name] = e.target.value;
    this.setState(info);
  }

  
  handleAddS(e) {
    const info = this.state.cvInfo.skills;
    info.push('new Skill');
    this.setState(info);
  }
  
  handleAddWE(e) {
    const info = this.state.cvInfo.workExp;
    info.push({ 
      companyName: 'Company Name',
      positionTitle: 'Name of Position',
      startDate: 'Start Year',
      endDate: 'End Year',
      details: [
        {detail: 'Work Responsibilities', id: uniqid()}
      ],
      id: uniqid()
    });
    this.setState(info);
  }
  
  handleAddD(e) {
    const info = this.state.cvInfo.workExp[e.target.name].details;
    info.push({
      detail: 'Work Responsibilities',
      id: uniqid()
    });
    this.setState(info);
  }
  
  handleAddEE(e) {
    const info = this.state.cvInfo.educExp;
    info.push({
      schoolName: 'School Name',
      titleOfStudy: 'Field of Study or Major',
      startDate: 'start',
      endDate: 'end',
      id: uniqid()
    });
    this.setState(info);
  }
  
  handleRemoveWE(e) {
    const info = this.state.cvInfo.workExp;
    const index = info.map(x => x.id).indexOf(e.target.id);
    info.splice(index, 1);
    this.setState(info);
  }
  
  handleRemoveEE(e) {
    const info = this.state.cvInfo.educExp;
    const index = info.map(x => x.id).indexOf(e.target.id);
    info.splice(index, 1);
    this.setState(info);
  }
  
  removeEmptyDetail(e) {
    //hide feature taken from inputChanger
    let children = e.target.parentNode.childNodes
    children.forEach((item) => item.classList.toggle('hidden'));
  
    //delete empty details
    const info = this.state.cvInfo.workExp;
    info.forEach(element => {
      element.details.forEach((detail) => {
        if (/[a-zA-Z]/.test(detail.detail) === false) {
          const index = element.details.map(x => x.id).indexOf(e.target.id);
          element.details.splice(index, 1)
        }
      })
    })
    this.setState(info);
  }
  
  toggleMoreFeatures(e) {
    let editState = this.state.cvInfo.editState;
    if (editState.state === 'false') {
      editState.state = 'true';
    } else {
      editState.state = 'false';
    }
    
    this.setState(editState);
  }
  
  render() {
    const { generalInfo } = this.state.cvInfo;
    const { educExp } = this.state.cvInfo;
    const { workExp } = this.state.cvInfo;
    const { skills } = this.state.cvInfo;
    const addButts = document.querySelectorAll('.add');
    const removeButts = document.querySelectorAll('.remove');
    const editState = this.state.cvInfo.editState;

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
          <GeneralInfo obj={generalInfo} change = {this.handleChangeGI}/>
          <div className='info'>
            <div className='left-side'>
              <EducExp obj={educExp} add={this.handleAddEE} change = {this.handleChangeEE} remove = {this.handleRemoveEE}/>
              <Skills obj={skills} add={this.handleAddS} change = {this.handleChangeS}/>
            </div>
            <hr></hr>
            <WorkExp obj={workExp} add={this.handleAddWE} addDetail={this.handleAddD} 
            change = {this.handleChangeWE} changeDetail = {this.handleChangeD} 
            deleteEmptyDetails = {this.removeEmptyDetail} remove = {this.handleRemoveWE}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
