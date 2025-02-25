import React, { useState } from 'react'

const ToDo = () => {

    const [toDo, setToDo] = useState([
        {
            id:1,
            name: "Learn English",
            deadline: "23-04-2012"
        }
    ])

  return (
    <div>
        <div>
            <input type="text" placeholder='Enter your todo.....'/>
            <label htmlFor="deadline"></label>
            <input type="date" name="deadline" id="" />
        </div>
    </div>
  )
}

export default ToDo
