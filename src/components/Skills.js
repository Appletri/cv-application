import {EditWrapperInput} from './Wrapper';

  function Skills(props) {
    
  return (
    <div className="skills">
      <h1>Skills</h1>
      <div>
      {props.obj.map((skill, index) => {
        return <div key={index}>
          <EditWrapperInput obj={props.obj} change={props.change} chLength={10}
          infoEdit={skill} field = {index}/>
        </div>
      })}
      </div>
      <button className='add hidden' onClick={props.add}>Add Skill</button>
    </div>
  );
}

export default Skills;