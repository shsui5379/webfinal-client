import { Link } from "react-router-dom/cjs/react-router-dom.min";

/*==================================================
StudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the single student view page.
================================================== */
const StudentView = (props) => {
  const { student } = props;

  // Render a single Student view 
  return (
    <div>
      <h1>{student.firstname + " " + student.lastname}</h1>

      <a href={`mailto:${student.email}`}>{student.email}</a>
      <br />
      {student.gpa} GPA
      <br />

      <img className="student-image" src={student.imageUrl} alt={student.name}></img>

      <h3>Attends: {(student.campus) ? <Link to={`/campus/${student.campus.id}`}>{student.campus.name}</Link> : `Not enrolled in any campus`}</h3>
    </div>
  );

};

export default StudentView;