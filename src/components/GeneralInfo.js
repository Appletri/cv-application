import mail from '../assets/mail.svg';
import phone from '../assets/phone.svg';
import linkedin from '../assets/linkedin.svg';
import {EditWrapperInput} from './Wrapper';


function GeneralInfo (props) {
  return (
    <div className="general-info">
      <div className="name">
        <div className="full-name">
          <EditWrapperInput obj={props.obj} change={props.change} field='firstName' chLength={1}
            infoEdit={props.obj.firstName}/>
          <EditWrapperInput obj={props.obj} change={props.change} field='lastName' chLength={1}
            infoEdit={props.obj.lastName}/>
        </div>
        <div className='title'>
        <EditWrapperInput obj={props.obj} change={props.change} field='title' chLength={10}
            infoEdit={props.obj.title}/>
        </div>
      </div>
      <div className="contact-info">
        <div className='wrapper'>
          <img src={phone} alt='phone'/>
          <EditWrapperInput obj={props.obj} change={props.change} field='phoneNumber' chLength={6}
            infoEdit={props.obj.phoneNumber}/>
        </div>
        <div className='wrapper'>
          <img src={mail} alt='mail'/>
          <EditWrapperInput obj={props.obj} change={props.change} field='email' chLength={10}
            infoEdit={props.obj.email}/>
        </div>
        <div className='wrapper'>
          <img src={linkedin} alt='linkedin logo'/>
          <EditWrapperInput obj={props.obj} change={props.change} field='linkedin' chLength={10}
            infoEdit={props.obj.linkedin}/>
        </div>
      </div>
    </div>
  ); 
}

export default GeneralInfo;