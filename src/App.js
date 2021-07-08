import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState(['Morning', 'Hello', 'Whats up']);

  console.log(input);
  console.log(messages);

  const sendMessage = (event) => {
    // all the logic to send the message goes here...

    // Spread out the messages array and append to input
    setMessages([...messages, input]);

    // Input becomes empty string again
    setInput('');
  };

  return (
    <div className='App'>
      <h1>React Firebase Facebook Messenger Clone 🚀</h1>

      <input value={input} onChange={(event) => setInput(event.target.value)} />
      <button onClick={sendMessage}>Send Message</button>

      {messages.map((message) => (
        <p>{message}</p>
      ))}
    </div>
  );
}

export default App;
