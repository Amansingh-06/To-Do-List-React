import React, { useState } from 'react';
import Header from './component/Header';
import ToDoList from './component/ToDoList';
import "./App.css"

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, { text: inputValue, completed: false }]);
      setInputValue('');
    }
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const markCompleted = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const editTodo = (index, newText) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, text: newText } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <Header />
      <div className='inputholder'>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new task..."
        className='inputbox'
      />
        <button className='addbtn' onClick={addTodo}>Add</button>
      </div>
      <ToDoList todos={todos} markCompleted={markCompleted} deleteTodo={deleteTodo} editTodo={editTodo} />
    </div>
  );
}

export default App;
