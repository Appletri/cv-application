import { useState } from 'react';
import {EditWrapperInput} from './Wrapper';

  function Skills() {
    const [skills, setSkills] = useState([]);

    const addSkill = () => {
      setSkills([...skills, 'New Skill'])
    }
    
    const changeSkill = (e) => {
      let newSkills = [...skills];
      newSkills[e.target.name] = e.target.value;
      setSkills(newSkills);
    }

  return (
    <div className="skills">
      <h1>Skills</h1>
      <div>
      {skills.map((skill, index) => {
        return <div key={index}>
          <EditWrapperInput change={changeSkill} chLength={10}
          infoEdit={skill} field = {index}/>
        </div>
      })}
      </div>
      <button className='add hidden' onClick={addSkill}>Add Skill</button>
    </div>
  );
}

export default Skills;