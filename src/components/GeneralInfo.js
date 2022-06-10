import mail from '../assets/mail.svg';
import phone from '../assets/phone.svg';
import linkedin from '../assets/linkedin.svg';
import {EditWrapperInput} from './Wrapper';
import { useState } from 'react';


function GeneralInfo () {
  const [firstName, setFirstName] = useState('Your');
  const [lastName, setLastName] = useState('Name');
  const [title, setTitle] = useState('your title');
  const [email, setEmail] = useState('example@email.com');
  const [phoneNumber, setPhoneNumber] = useState('123-456-7890');
  const [linkedinLink, setLinkedinLink] = useState('linkedin.com/example');

  const changeFirstName = (e) => {
    setFirstName(e.target.value)
  }

  const changeLastName = (e) => {
    setLastName(e.target.value)
  }

  const changeTitle = (e) => {
    setTitle(e.target.value)
  }

  const changeEmail = (e) => {
    setEmail(e.target.value)
  }

  const changePhoneNumber = (e) => {
    setPhoneNumber(e.target.value)
  }

  const changeLinkedinLink = (e) => {
    setLinkedinLink(e.target.value)
  }

  
  return (
    <div className="general-info">
      <div className="name">
        <div className="full-name">
          <EditWrapperInput change={changeFirstName} chLength={1}
            infoEdit={firstName}/>
          <EditWrapperInput change={changeLastName} chLength={1}
            infoEdit={lastName}/>
        </div>
        <div className='title'>
        <EditWrapperInput change={changeTitle} chLength={10}
            infoEdit={title}/>
        </div>
      </div>
      <div className="contact-info">
        <div className='wrapper'>
          <img src={phone} alt='phone'/>
          <EditWrapperInput change={changePhoneNumber} chLength={6}
            infoEdit={phoneNumber}/>
        </div>
        <div className='wrapper'>
          <img src={mail} alt='mail'/>
          <EditWrapperInput change={changeEmail} chLength={10}
            infoEdit={email}/>
        </div>
        <div className='wrapper'>
          <img src={linkedin} alt='linkedin logo'/>
          <EditWrapperInput change={changeLinkedinLink} chLength={10}
            infoEdit={linkedinLink}/>
        </div>
      </div>
    </div>
  ); 
}

export default GeneralInfo;