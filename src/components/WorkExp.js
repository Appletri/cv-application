function WorkExp(props) {
  return (
    <div className="work-exp">
      <h1>Work Experience</h1>
      <p>Company: {props.obj.companyName}</p>
      <p>Position: {props.obj.positionTitle}</p>
      <p>{props.obj.startDate + '-' + props.obj.endDate}</p>
    </div>
  );
}

export default WorkExp;