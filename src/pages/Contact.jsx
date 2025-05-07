import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeGrades, marryStudents, sortStudents } from "../redux/actions";
import GradeForm from "../components/GradeForm";
import AgeForm from "../components/AgeForm";

function Contact() {
  const students = useSelector((state) => state.students);
  const dispatch = useDispatch();
  // console.log(students);

  const handleSort = () => {
    dispatch(sortStudents());
  };

  const handleMarry = () => {
    dispatch(marryStudents(4));
  }



  return (
    <>
      <button className="sort" onClick={handleSort}>Sort by age</button>

      <div className="container">
        {students.map((student) => (
          <div key={student.id} className="card" style={{ backgroundColor: student.isMarried ? 'pink' : 'white' }}>
            <h2>{student.name}</h2>
            <p>Age: {student.age}</p>
            <p>Grade: {student.grade}</p>
            <p>Marital Status: {student.isMarried ? "Married 💍❤️‍🔥" : "Single"}</p>
            <div className="btns">
              <button className="sort" onClick={() => dispatch(marryStudents(student.id))}>Marry </button>
            </div>
            <GradeForm studentId ={student.id}/>
            <AgeForm studentId={student.id}/>
          </div>
        ))}
      </div>
    </>
  );
}

export default Contact;