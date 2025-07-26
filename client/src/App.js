import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api')
      .then((res) => res.text())
      .then((data) => setMessage(data))
      .catch((err) => console.log('Fetch error:', err));
  }, []);

  return (
    <div className="App">
       <header className="App-header">
       <p>
         Temperature Recorder
        </p>
       </header>
      <p>{message}</p>
    </div>
  );
}
export default App;
