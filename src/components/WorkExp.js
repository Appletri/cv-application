import {EditWrapper, EditWrapperTextArea} from './Wrapper';

function WorkExp(props) {
  const works = props.obj;
  return (
    <div className="work-exp">
      <h1>Work Experience</h1>
      {works.map((work, parentIndex) => {
        return <div className="job">
          <button className='remove hidden' onDoubleClick={props.remove} id={work.id}><div className='remove-icon'/></button>
            <div className="company-time">
              <EditWrapper obj={work} change={props.change} field='companyName' chLength={1}
              infoEdit={work.companyName} index={parentIndex}/>
              <div className='time'> 
                <EditWrapper obj={work} change={props.change} field='startDate' chLength={1}
                infoEdit={work.startDate} index={parentIndex}/>
                <div className='dash'>-</div>
                <EditWrapper obj={work} change={props.change} field='endDate' chLength={0}
                infoEdit={work.endDate} index={parentIndex}/>
              </div>
            </div>
            <div className='position-title'>
              <EditWrapper obj={work} change={props.change} field='positionTitle' chLength={1}
              infoEdit={work.positionTitle} index={parentIndex}/>
            </div>
            <ul className="details">
            {work.details.map((detail) => {
                return <li key={detail.id}>
                  <EditWrapperTextArea obj={props.obj} change={props.changeDetail} field={parentIndex} 
                  index={detail.id} infoEdit={detail.detail} remove={props.deleteEmptyDetails}/>
                </li>                
              })}
            <button className='add hidden' name={parentIndex} onClick={props.addDetail}>Add Work Responsibilities</button>
            </ul>
          </div>
      })}
      <button className='add hidden' onClick={props.add}>Add Work Experience</button>
    </div>
  );
}

export default WorkExp;