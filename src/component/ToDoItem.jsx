import React, { useState } from 'react';
import "./ToDOItem.css"

const ToDoItem = ({ todo, markCompleted, deleteTodo, editTodo }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newText, setNewText] = useState(todo.text);

    const handleEdit = () => {
        if (isEditing) {
            editTodo(newText);
        }
        setIsEditing(!isEditing);
    };

    return (
        <div className='itemholder'>
            {/* Show checkmark if task is completed */}
            <span className='mark'>
                {todo.completed ? '✔️' : ''}
            </span >
         <li className='mainlist'>

            {isEditing ? (
                <input value={newText} onChange={(e) => setNewText(e.target.value)} className='editinput'/>
            ) : (
                <span className='text'>
                    {todo.text}
                </span>
            )}

            <button onClick={markCompleted} className='completebtn'>
                {todo.completed ? 'Unmark' : 'Complete'}
            </button>
            <button onClick={deleteTodo} style={{ marginLeft: '10px' }}>Delete</button>
            <button onClick={handleEdit} style={{ marginLeft: '10px' }}>
                {isEditing ? 'Save' : 'Edit'}
            </button>
            </li>
        </div>
    );
};

export default ToDoItem;
