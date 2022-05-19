import {EditWrapperInput, EditWrapperTextArea} from './Wrapper';

function WorkExp(props) {
  const works = props.obj;
  return (
    <div className="work-exp">
      <h1>Work Experience</h1>
      {works.map((work, parentIndex) => {
        return <div className="job" key={work.id}>
          <button className='remove' onClick={props.remove} id={work.id}><div className='remove-icon'/></button>
            <div className="company-time">
              <EditWrapperInput change={props.change} field='companyName' chLength={1}
              infoEdit={work.companyName} index={parentIndex}/>
              <div className='time'> 
                <EditWrapperInput change={props.change} field='startDate' chLength={1}
                infoEdit={work.startDate} index={parentIndex}/>
                <div className='dash'>-</div>
                <EditWrapperInput change={props.change} field='endDate' chLength={1}
                infoEdit={work.endDate} index={parentIndex}/>
              </div>
            </div>
            <div className='position-title'>
              <EditWrapperInput change={props.change} field='positionTitle' chLength={1}
              infoEdit={work.positionTitle} index={parentIndex}/>
            </div>
            <ul className="details">
            {work.details.map((detail) => {
                return <li key={detail.id}>
                  <EditWrapperTextArea change={props.changeDetail} field={parentIndex} 
                  index={detail.id} infoEdit={detail.detail} remove={props.deleteEmptyDetails}/>
                </li>                
              })}
            <button className='add' name={parentIndex} onClick={props.addDetail}>Add Work Responsibilities</button>
            </ul>
          </div>
      })}
      <button className='add hidden' onClick={props.add}>Add Work Experience</button>
    </div>
  );
}

export default WorkExp;