import {EditWrapperInput} from './Wrapper';

function EducExp(props) {
  const education = props.obj;

  return (
    <div className="education">
      <h1>Education</h1>
      {education.map((school, parentIndex) => {
        return <div className="school" key={school.id}>
          <button className='remove' onClick={props.remove} id={school.id}><div className='remove-icon'/></button>
          <div className="school-time">
            <EditWrapperInput change={props.change} field='schoolName' chLength={1}
            infoEdit={school.schoolName} index={parentIndex}/>
            <EditWrapperInput change={props.change} field='titleOfStudy' chLength={1}
            infoEdit={school.titleOfStudy} index={parentIndex}/>
            <div className='time'> 
              <EditWrapperInput change={props.change} field='startDate' chLength={0.5}
              infoEdit={school.startDate} index={parentIndex}/>
              <div className='dash'>-</div>
              <EditWrapperInput change={props.change} field='endDate' chLength={0}
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