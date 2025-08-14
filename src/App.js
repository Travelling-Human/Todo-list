import './App.css';
import { useState } from 'react';
import React from 'react';

function App() {
  const [toDo, setToDo] = useState('');
  const [toDos, setToDos] = useState([]);

  const addTodo = () => {
    if (toDo.trim() !== '') {
      setToDos([...toDos, { id: Date.now(), text: toDo, status: false }]);
      setToDo('');
    }
  };

  const deleteTodo = (id) => {
    setToDos(toDos.filter((item) => item.id !== id));
  };

  const toggleTodo = (id) => {
    setToDos(
      toDos.map((item) =>
        item.id === id ? { ...item, status: !item.status } : item
      )
    );
  };

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>To-Do List</h1>
      </div>
      <br />
      <div className="subHeading">
		<h4>There are things left to be done</h4>
      </div>
		<br />
      <div className="input">
        <input 
          value={toDo} 
          onChange={(e) => setToDo(e.target.value)} 
          type="text" 
          placeholder="Add an item" 
        />
        <i className="fas fa-plus add-icon" onClick={addTodo}></i>
      </div>

      <div className="todos">
        {toDos.map((item) => (
          <div className="todo" key={item.id}>
            <div className="left">
              <input 
                type="checkbox" 
                checked={item.status} 
                onChange={() => toggleTodo(item.id)} 
              />
              <p style={{ textDecoration: item.status ? "line-through" : "none" }}>
                {item.text}
              </p>
            </div>
            <div className="right">
              <i className="fas fa-times delete-icon" onClick={() => deleteTodo(item.id)}></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
