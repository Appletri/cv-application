function AddButton(props) {
  return(
    <button className={'add'} onClick={props.add}>{props.text}</button>
  )
}

export default AddButton;