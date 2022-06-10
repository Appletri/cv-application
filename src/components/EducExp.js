import { useState } from 'react';
import {EditWrapperInput} from './Wrapper';

function EducExp() {
  const [data, setData] = useState([]);

  const addData = () => {
    setData([...data, {
      schoolName: 'School Name',
      titleOfStudy: 'Field of Study or Major',
      startDate: 'start',
      endDate: 'end'
    }])
  }

  const removeData = (e) => {
    let newData = [...data];
    const index = newData.map(x => x.id).indexOf(e.target.id);
    newData.splice(index, 1);
    setData(newData);
  }
  
  const changeData = (e) => {
    let newData = [...data];
    newData[e.target.id][e.target.name] = e.target.value;
    setData(newData);
  }

  return (
    <div className="education">
      <h1>Education</h1>
      {data.map((school, parentIndex) => {
        return <div className="school" key={school.id}>
          <button className='remove' onClick={removeData} id={school.id}><div className='remove-icon'/></button>
          <div className="school-time">
            <EditWrapperInput change={changeData} field='schoolName' chLength={1}
            infoEdit={school.schoolName} index={parentIndex}/>
            <EditWrapperInput change={changeData} field='titleOfStudy' chLength={1}
            infoEdit={school.titleOfStudy} index={parentIndex}/>
            <div className='time'> 
              <EditWrapperInput change={changeData} field='startDate' chLength={0.5}
              infoEdit={school.startDate} index={parentIndex}/>
              <div className='dash'>-</div>
              <EditWrapperInput change={changeData} field='endDate' chLength={0}
              infoEdit={school.endDate} index={parentIndex}/>
            </div>
          </div>
        </div>
      })}
      <button className='add hidden' onClick={addData}>Add Education</button>
    </div>
  );
}

export default EducExp;