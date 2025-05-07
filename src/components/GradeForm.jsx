import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { changeGrades } from '../redux/actions';

function GradeForm({studentId}) {
    const [grade, setGrade] = useState('');
    const dispatch = useDispatch();
    return (
        <div className="grade-from">
            <input
                type="text"
                placeholder='Change grade'
                value={grade}
                onChange={(e) => setGrade(e.target.value)}
            />
            <button className="sort" onClick={() => dispatch(changeGrades(studentId, grade))}>Change Grade</button>
        </div>
    )
}

export default GradeForm