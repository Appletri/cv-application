import {EditWrapper} from './Wrapper';

function EducExp(props) {
  const education = props.obj;
  return (
    <div className="education">
      <h1>Education</h1>
      {education.map((school, parentIndex) => {
        return <div className="school">
          <button className='remove hidden' onDoubleClick={props.remove} id={school.id}><div className='remove-icon'/></button>
          <div className="school-time">
            <EditWrapper obj={school} change={props.change} field='schoolName' chLength={1}
            infoEdit={school.schoolName} index={parentIndex}/>
            <EditWrapper obj={school} change={props.change} field='titleOfStudy' chLength={1}
            infoEdit={school.titleOfStudy} index={parentIndex}/>
            <div className='time'> 
              <EditWrapper obj={school} change={props.change} field='startDate' chLength={1}
              infoEdit={school.startDate} index={parentIndex}/>
              <div className='dash'>-</div>
              <EditWrapper obj={school} change={props.change} field='endDate' chLength={0}
              infoEdit={school.endDate} index={parentIndex}/>
            </div>
          </div>
        </div>
      })}
      <button className='add hidden' onClick={props.add}>Add Education</button>
    </div>
  );
}

export default EducExp;