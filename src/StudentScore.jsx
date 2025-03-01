import { Button, Modal } from 'bootstrap';
import React, { useMemo, useReducer, useRef, useState } from 'react'

const StudentScore = () => {

    const reducer = (state, action) => {
        switch(action.type) {
            case "ADD":
                return [...state, action.payload];
            case "UPDATE":
                return state.map((item) => (item.id === action.payload.id) ? action.payload : item);
            default:
                return state;
        }
    }


    const [students, dispatch] = useReducer(reducer, []);


    const [name, setName] = useState("");
    const [score1, setScore1] = useState(0);
    const [score2, setScore2] = useState(0);
    const [score3, setScore3] = useState(0);
    const [editedStudent, setEditedStudent] = useState({});
    const inputRef = useRef(0);


    const handleAddStudent = () => {
        if(!name || !score1 || !score2 || !score3) return;
        const newStudent = {
            id: Date.now(),
            name: name,
            score1: parseFloat(score1),
            score2: parseFloat(score2),
            score3: parseFloat(score3),
            avgScore: 0
        };
        dispatch({type: "ADD", payload: newStudent});
        inputRef.current.focus();
        setName("");
        setScore1(0);
        setScore2(0);
        setScore3(0);
    }

    const avgScoreCalc = (score1, score2, score3) => {
        return (score1 + score2 + score3) / 3;
    }
    const calculatedStudent = useMemo(() => {
        return students.map((student) => ({
            ...student,
            avgScore: avgScoreCalc(student.score1, student.score2, student.score3)
        }));
    }, [students]);

    const handleSaveChanges = () => {
        dispatch({type: "UPDATE", payload: editedStudent})
        setEditedStudent({});
    }

  return (
    <div>
      <div>
        <input ref={inputRef} value={name} onChange={(event) => {setName(event.target.value)}} placeholder='Enter your name....'/>
        <input type="text" value={score1} onChange={(event) => {setScore1(event.target.value)}} placeholder='Enter your score1....'/>
        <input type="text" value={score2} onChange={(event) => {setScore2(event.target.value)}} placeholder='Enter your score2....'/>
        <input type="text" value={score3} onChange={(event) => {setScore3(event.target.value)}} placeholder='Enter your score3....'/>
        <button onClick={handleAddStudent}>Submit</button>
      </div>
      <div>
        <table className='table'>
            <thead>
                <tr>
                    <th>Họ tên</th>
                    <th>Điểm 1</th>
                    <th>Điểm 2</th>
                    <th>Điểm 3</th>
                    <th>Điểm trung bình</th>
                    <th>Cập nhật</th>
                </tr>
            </thead>
            <tbody>
            {
                calculatedStudent.map((s) => (
                    <tr key={s.id}>
                        <td>{s.name}</td>
                        <td>{s.score1}</td>
                        <td>{s.score2}</td>
                        <td>{s.score3}</td>
                        <td>{s.avgScore}</td>
                        <td><button onClick={() => {setEditedStudent(s)}} type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">Sửa</button></td>
                    </tr>
                ))
            }
            </tbody>
        </table>
      </div>
<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">New message</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      
        <table className='table modal-body'>
            <thead>
                <tr>
                    <th>Họ tên</th>
                    <th>Điểm 1</th>
                    <th>Điểm 2</th>
                    <th>Điểm 3</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><input className='w-100' value={editedStudent.name} onChange={(event)=>{setEditedStudent({...editedStudent, name: event.target.value})}} type="text" /></td>
                    <td><input className='w-100' onChange={(event)=>{setEditedStudent({...editedStudent, score1: parseFloat(event.target.value)})}} type="text" /></td>
                    <td><input className='w-100' onChange={(event)=>{setEditedStudent({...editedStudent, score2: parseFloat(event.target.value)})}} type="text" /></td>
                    <td><input className='w-100' onChange={(event)=>{setEditedStudent({...editedStudent, score1: parseFloat(event.target.value)})}} type="text" /></td>
                </tr>
            </tbody>
        </table>
      
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" onClick={handleSaveChanges} className="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default StudentScore
