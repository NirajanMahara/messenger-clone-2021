import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');

  console.log(input);

  return (
    <div className='App'>
      <h1>React Firebase Facebook Messenger Clone 🚀</h1>

      <input value={input} onChange={(event) => setInput(event.target.value)} />
      <button>Send Message</button>
      {/* <input /> */}
      {/* <button /> */}

      {/* <Messages themselves /> */}
    </div>
  );
}

export default App;
