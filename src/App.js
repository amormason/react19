import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [value, setValue] = useState(1);
  const [options, setOptions] = useState([1, 2, 3]);

  useEffect(() => {
    console.log('value', value);
  }, [value]);

  const onchange = (e) => {
    setValue(e.target.value);
    setOptions([1, 2, 3, 4, 5]);
  }

  return (
    <div className="App">
      <select value={value} onChange={onchange} >
        {options.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}

export default App;
