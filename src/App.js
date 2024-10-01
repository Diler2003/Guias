import logo from './logo.svg';
import './App.css';

// App.js
import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    // Simular una llamada a una API para obtener datos
    const fetchData = () => {
      const initialItems = ['Item 1', 'Item 2', 'Item 3'];
      setItems(initialItems);
    };
    fetchData();
  }, []);

  const handleAddItem = () => {
    if (inputValue) {
      setItems([...items, inputValue]);
      setInputValue('');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Contador uwu</h1>

        <div>
          <p>Contadort: {count}</p>
          <button onClick={() => setCount(count + 1)}>Aumentar</button>
          <button onClick={() => setCount(count - 1)}>Restar</button>
        </div>

        <div>
          <h2>Lista de items</h2>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Añadir nuevo Item"
          />
          <button onClick={handleAddItem}>Añadir Item</button>
          <ul>
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </header>
    </div>
  );
};

export default App;

