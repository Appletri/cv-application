import {InputChanger, InputChangerTextArea} from './InputChanger';

function EditWrapperInput(props) {

  const edit = (e) => {
    let children = e.target.parentNode.childNodes
    children.forEach((item) => item.classList.toggle('hidden'))
  }

  return(
    <div className='wrapper'>
      <div onClick={edit}>{props.infoEdit}</div>
      <InputChanger obj={props.infoEdit} change={props.change} field={props.field} 
      chLength={props.chLength} index={props.index}/>
    </div>
  )
}

function EditWrapperTextArea(props) {
  const edit = (e) => {
    let children = e.target.parentNode.childNodes
    children.forEach((item) => item.classList.toggle('hidden'))
  }

  return(
    <div className='wrapper'>
      <div onClick={edit}>{props.infoEdit}</div>
      <InputChangerTextArea obj={props.infoEdit} change={props.change} field={props.field} 
      chLength={props.chLength} index={props.index} remove={props.remove}/>
    </div>
  )
}

export {EditWrapperInput, EditWrapperTextArea};