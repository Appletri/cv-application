import './styles/App.css';
import { Component } from 'react';
import React from 'react';
import GeneralInfo from './components/GeneralInfo';
import EducExp from './components/EducExp';
import WorkExp from './components/WorkExp';

class App extends Component {
  constructor() {
    super();

    this.state = {  
      generalInfo: {
        firstName: 'John',
        lastName: 'Doe',
        title: 'full stack web developer',
        email: 'johndoe@email.com',
        phoneNumber: '123-456-7890',
        linkedin: 'linkedin.com'
      },

      educExp: {
        schoolName: 'University of Utah',
        titleOfStudy: 'Film and Media Arts',
        startDate: '2011',
        endDate: '2015'
      },

      workExp: {
        companyName: 'Google',
        positionTitle: 'Full Stack Web Developer',
        startDate: '2000',
        endDate: '2021'
      }
    }
  }

  render() {
    const { generalInfo } = this.state;
    const { educExp } = this.state;
    const { workExp } = this.state;

    return (
      <div className='cv'>
        <GeneralInfo obj={generalInfo} />
        <div className='info'>
          <EducExp obj={educExp}/>
          <hr></hr>
          <WorkExp obj={workExp}/>
        </div>
      </div>
    );
  }
}

export default App;
