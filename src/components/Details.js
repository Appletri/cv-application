import { useState } from 'react';
import uniqid from 'uniqid';
import {EditWrapperTextArea} from './Wrapper';

  function Details(props) {
    const [details, setDetails] = useState([{detail: 'Work Responsibilities', id: uniqid()}]);

    const addDetail = () => {
      setDetails([...details, {detail: 'Work Responsibilities', id: uniqid()}])
    }
    
    const changeDetail = (e) => {
      let newDetails = [...details];
      const index = newDetails.map(x => x.id).indexOf(e.target.id);
      newDetails[index].detail = e.target.value;
      setDetails(newDetails);
    }

    const removeEmptyDetail = (e) => {
      //hide feature taken from inputChanger
      let children = e.target.parentNode.childNodes
      children.forEach((item) => item.classList.toggle('hidden'));
    
      //delete empty details
      const info = [...details];
      info.forEach(element => {
        if (/[a-zA-Z]/.test(element.detail) === false) {
          const index = info.map(x => x.id).indexOf(e.target.id);
          info.splice(index, 1)     
        }
      })
      setDetails(info);
    }

  return (
    <ul className="details">
      {details.map((detail) => {
          return <li key={detail.id}>
            <EditWrapperTextArea 
            change={changeDetail} index={detail.id} infoEdit={detail.detail} 
            remove={removeEmptyDetail}/>
          </li>                
        })}
      <button className='add' onClick={addDetail}>Add Work Responsibilities</button>
    </ul>
  );
}

export default Details;