import {EditWrapperInput} from './Wrapper';
import uniqid from 'uniqid';
import { useState } from 'react';
import Details from './Details';

function WorkExp() {
  const [data, setData] = useState([]);

  const addData = () => {
    setData([...data, {
      companyName: 'Company Name',
      positionTitle: 'Name of Position',
      startDate: 'Start Year',
      endDate: 'End Year',
      id: uniqid()
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
    <div className="work-exp">
      <h1>Work Experience</h1>
      {data.map((work, parentIndex) => {
        return <div className="job" key={work.id}>
          <button className='remove' onClick={removeData} id={work.id}><div className='remove-icon'/></button>
            <div className="company-time">
              <EditWrapperInput change={changeData} field='companyName' chLength={1}
              infoEdit={work.companyName} index={parentIndex}/>
              <div className='time'> 
                <EditWrapperInput change={changeData} field='startDate' chLength={1}
                infoEdit={work.startDate} index={parentIndex}/>
                <div className='dash'>-</div>
                <EditWrapperInput change={changeData} field='endDate' chLength={1}
                infoEdit={work.endDate} index={parentIndex}/>
              </div>
            </div>
            <div className='position-title'>
              <EditWrapperInput change={changeData} field='positionTitle' chLength={1}
              infoEdit={work.positionTitle} index={parentIndex}/>
            </div>
            <Details />
          </div>
      })}
      <button className='add hidden' onClick={addData}>Add Work Experience</button>
    </div>
  );
}

export default WorkExp;