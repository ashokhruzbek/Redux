import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { changeAge } from '../redux/actions';

function AgeForm({studentId}) {
    const [age, setAge] = useState('');
    const dispatch = useDispatch();
  return (
    <div className="age-form">
        <input 
            type="number"
            placeholder='Change age'
            value={age}
            onChange={(e) => setAge(e.target.value)}
            />
            <button className="sort" onClick={() => dispatch(changeAge(studentId, age))}>Change age</button>
    </div>
  )
}

export default AgeForm