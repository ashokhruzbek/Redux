import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { sortStudents } from "../redux/actions";

function Contact() {
  const students = useSelector((state) => state.students);
  const dispatch = useDispatch();
  // console.log(students);

  const handleSort = () => {
    dispatch(sortStudents());
  };

  return (
    <>
    <button className="sort" onClick={handleSort}>Sort by age</button>
    <button className="sort" onClick={handleSort}>MARRY</button>
    
    <div className="container">
      {students.map((student) => (
        <div key={student.id} className="card">
          <h2>{student.name}</h2>
          <p>Age: {student.age}</p>
          <p>Grade: {student.grade}</p>
          <p>Marital Status: {student.isMarried ? "Married" : "Single"}</p>
        </div>
      ))}
    </div>
    </>
  );
}

export default Contact;