import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState(['Morning', 'Hello', 'Whats up']);

  console.log(input);
  console.log(messages);

  const sendMessage = (event) => {
    // all the logic to send the message goes here...

    // Prevent default refreshing when enter submit form button
    event.preventDefault();

    // Spread out the messages array and append to input
    setMessages([...messages, input]);

    // Input becomes empty string again
    setInput('');
  };

  return (
    <div className='App'>
      <h1>React Firebase Facebook Messenger Clone 🚀</h1>

      <form>
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />

        <button disabled={!input} type='submit' onClick={sendMessage}>
          Send Message
        </button>
      </form>

      {messages.map((message) => (
        <p>{message}</p>
      ))}
    </div>
  );
}

export default App;
