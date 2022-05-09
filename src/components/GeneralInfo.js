import mail from '../assets/mail.svg';
import phone from '../assets/phone.svg';
import linkedin from '../assets/linkedin.svg';

function GeneralInfo(props) {

  return (
    <div className="general-info">
      <div className="name">
        <div className="full-name">
          <h1 onClick={() => console.log('edit')}>{props.obj.firstName}</h1>
          <h1 onClick={() => console.log('edit')}>{props.obj.lastName}</h1>
        </div>
        <p>{props.obj.title}</p>
      </div>
      <div className="contact-info">
        <p><img src={mail} alt='mail'/>{props.obj.email}</p>
        <p><img src={phone} alt='phone'/>{props.obj.phoneNumber}</p>
        <p><img src={linkedin} alt='linkedin logo'/>{props.obj.linkedin}</p>
      </div>
    </div>
  );
}

export default GeneralInfo;