function InputChanger (props) {
  // const handleChangeDone = (e) => {
  //   if (e.key === 'Enter') {
  //     let children = e.target.parentNode.childNodes
  //     children.forEach((item) => item.classList.toggle('hidden'))
  //   }
  // }
  
  const handleChangeDoneByFocusOut = (e) => {
    let children = e.target.parentNode.childNodes
    children.forEach((item) => item.classList.toggle('hidden'))
  }
  return(
    <input type='text' id={props.index} className='textInput hidden' 
    onChange={props.change} name={props.field} defaultValue={props.obj}
    style={{width: props.obj.length + props.chLength + 'ch'}} parent={props.parent}
    onBlur={handleChangeDoneByFocusOut}/>
  );
}

function InputChangerTextArea (props) {
  
  return(
    <textarea id={props.index} className='textArea hidden' 
    onChange={props.change} name={props.field} defaultValue={props.obj}
    onBlur={props.remove}/>
  );
}

export {InputChanger, InputChangerTextArea} ;