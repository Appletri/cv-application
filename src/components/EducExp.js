function EducExp(props) {
  return (
    <div className="education">
      <h1>Education</h1>
      <p>{props.obj.schoolName}</p>
      <p>{props.obj.titleOfStudy}</p>
      <p>{props.obj.startDate + '-' + props.obj.endDate}</p>
    </div>
  );
}

export default EducExp;