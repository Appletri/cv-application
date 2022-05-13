import {EditWrapper} from './Wrapper';

  function Skills(props) {
    
  return (
    <div className="skills">
      <h1>Skills</h1>
      <div>
      {props.obj.map((skill, index) => {
        return <EditWrapper obj={props.obj} change={props.change} chLength={10}
        infoEdit={skill} field = {index}/>;
      })}
      </div>
      <button className='add' onClick={props.add}>+</button>
    </div>
  );
}

export default Skills;