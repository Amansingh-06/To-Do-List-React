import React from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = ({ todos, markCompleted, deleteTodo, editTodo }) => {
    return (
        <ul>
            {todos.map((todo, index) => (
                <ToDoItem
                    key={index}
                    todo={todo}
                    markCompleted={() => markCompleted(index)}
                    deleteTodo={() => deleteTodo(index)}
                    editTodo={(newText) => editTodo(index, newText)}
                />
            ))}
        </ul>
    );
};

export default ToDoList;
