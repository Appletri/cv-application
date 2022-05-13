import {InputChanger, InputChangerTextArea} from './InputChanger';

function EditWrapper(props) {
  const edit = (e) => {
    let children = e.target.parentNode.childNodes
    children.forEach((item) => item.classList.toggle('hidden'))
  }
  const parentObj = props.infoEdit;

  return(
    <div className='wrapper'>
      <div onClick={edit}>{parentObj}</div>
      <InputChanger obj={parentObj} change={props.change} field={props.field} 
      chLength={props.chLength} index={props.index}/>
    </div>
  )
}

function EditWrapperTextArea(props) {
  const edit = (e) => {
    let children = e.target.parentNode.childNodes
    children.forEach((item) => item.classList.toggle('hidden'))
  }
  const parentObj = props.infoEdit;
  return(
    <div className='wrapper'>
      <div onClick={edit}>{parentObj}</div>
      <InputChangerTextArea obj={parentObj} change={props.change} field={props.field} 
      chLength={props.chLength} index={props.index} remove={props.remove}/>
    </div>
  )
}

export {EditWrapper, EditWrapperTextArea};