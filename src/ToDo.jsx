import React from 'react';
import { useReducer } from 'react'
import { useState, useMemo, useRef } from 'react';
const ToDo = () => {

    const reducer = (state, action) => {
        switch(action.type) {
            case "ADD":
                return [...state, action.payload];
            case "TOGGLE":
                return state.map((item) => item.id === action.payload ? {...item, complete: !item.complete} : item)
            default:
                return state;
        }
    }

    const [todos, dispatch] = useReducer(reducer, []);
    const [inputValue, setInputValue] = useState("");
    const inputRef = useRef(null);

    const handleAddTodo = () => {
        if(!inputValue) return;
        const newTodo = {
            id: Date.now(),
            text: inputValue,
            complete:false
        }
        dispatch({type: "ADD", payload: newTodo})
        setInputValue("")
    }

    const filteredTodos = useMemo(() => {
        return {
            completed: todos.filter((item) => item.complete),
            incomplete: todos.filter((item) => !item.complete)
        };
    })


    const handleToggleTodo = (id) => {
        dispatch({ type: "TOGGLE", payload: id });
    };

    return (
        <div>
            <div>
                <input 
                    value={inputValue} 
                    onChange={(e) => setInputValue(e.target.value)} 
                    ref={inputRef} 
                    type="text" 
                    placeholder='Enter your todo here' 
                />
                <button onClick={handleAddTodo}>Add</button>
            </div>
            <div>
                <h1>Completed Tasks</h1>
                <ul>
                    {filteredTodos.completed.map((item) => (
                        <li key={item.id}>
                            <div>{item.text}</div>
                            <button onClick={() => handleToggleTodo(item.id)}>TOGGLE</button>
                        </li>
                    ))}
                </ul>
                <h1>Incomplete Tasks</h1>
                <ul>
                    {filteredTodos.incomplete.map((item) => (
                        <li key={item.id}>
                            <div>{item.text}</div>
                            <button onClick={() => handleToggleTodo(item.id)}>TOGGLE</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ToDo;