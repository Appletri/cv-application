import './styles/App.css';
import { Component } from 'react';
import React from 'react';
import GeneralInfo from './components/GeneralInfo';
import EducExp from './components/EducExp';
import WorkExp from './components/WorkExp';
import Skills from './components/Skills';
import uniqid from 'uniqid';

class App extends Component {
  constructor() {
    super();
    this.handleChangeGI = this.handleChangeGI.bind(this);
    this.handleChangeEE = this.handleChangeEE.bind(this);
    this.handleChangeWE = this.handleChangeWE.bind(this);
    this.handleAddWE = this.handleAddWE.bind(this);
    this.handleChangeD = this.handleChangeD.bind(this);
    this.handleAddD = this.handleAddD.bind(this);
    this.handleChangeS = this.handleChangeS.bind(this);
    this.handleAddS = this.handleAddS.bind(this);
    this.handleDeleteEmptyDetails = this.handleDeleteEmptyDetails.bind(this);
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
        
        educExp: {
          schoolName: 'University of Utah',
          titleOfStudy: 'Film and Media Arts',
          startDate: '2011',
          endDate: '2015'
        },
        
        workExp: [
        {
          companyName: 'Made up Company',
          positionTitle: 'Full Stack Web Developer',
          startDate: '2000',
          endDate: '2021',
          details: [
            {detail: 'Hired, trained and leading an Agile team of 7 full-stack developers', id: uniqid()},
            {detail: 'Developed indexed database architecture using SQL procedures and triggers for 10 different applications', id: uniqid()},
            {detail: 'Worked with Core Java to develop automated solutions to include web interfaces using HTML, CSS, JavaScript and Web services', id: uniqid()},
            {detail: 'Worked with a committee of 6 members to organize fun-activities for the employees', id: uniqid()}
          ]
        }],
        skills: ['HTML', 'CSS', 'Javascript', 'React']
      }  
    }
  }

  handleChangeGI(e) {
    const info = this.state.cvInfo.generalInfo;
    info[e.target.name] = e.target.value;
    this.setState(info);
  }

  handleChangeEE(e) {
    const info = this.state.cvInfo.educExp;
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

  handleDeleteEmptyDetails(e) {
    //toggle feature taken from inputChanger
    let children = e.target.parentNode.childNodes
    children.forEach((item) => item.classList.toggle('hidden'));
  
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
      ]
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

  render() {
    const { generalInfo } = this.state.cvInfo;
    const { educExp } = this.state.cvInfo;
    const { workExp } = this.state.cvInfo;
    const { skills } = this.state.cvInfo;

    return (
      <div className='cv'>
        <GeneralInfo obj={generalInfo} change = {this.handleChangeGI}/>
        <div className='info'>
          <div className='left-side'>
            <EducExp obj={educExp} change = {this.handleChangeEE}/>
            <Skills obj={skills} add={this.handleAddS} change = {this.handleChangeS}/>
          </div>
          <hr></hr>
          <WorkExp obj={workExp} add={this.handleAddWE} addDetail={this.handleAddD} 
          change = {this.handleChangeWE} changeDetail = {this.handleChangeD} 
          deleteEmptyDetails = {this.handleDeleteEmptyDetails}/>
        </div>
      </div>
    );
  }
}

export default App;
