/*==================================================
CampusView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display a single campus and its students (if any).
================================================== */
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

// Take in props data to construct the component
const CampusView = (props) => {
  const { campus } = props;

  // Render a single Campus view with list of its students
  return (
    <div>
      <h1>{campus.name}</h1>
      <p>{campus.address}</p>
      <p>{campus.description}</p>
      <img className="campus-image" src={campus.imageUrl} alt={campus.name}></img>
      <br />

      <Link to={`/editcampus/${campus.id}`}>
        <Button variant="contained" color="primary">Edit Campus</Button>
      </Link>

      <br />
      <h2>Students:</h2>
      {
        (campus.students.length === 0) ? (<div>No enrolled students</div>) :
          campus.students.map(student => {
            let name = student.firstname + " " + student.lastname;
            return (
              <div key={student.id}>
                <Link to={`/student/${student.id}`}>
                  <h3>{name}</h3>
                </Link>
              </div>
            );
          })
      }
    </div>
  );
};

export default CampusView;