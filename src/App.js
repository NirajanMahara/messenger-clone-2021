import React, { useState, useEffect } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import './App.css';
import Message from './Message';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { username: 'nirajan', text: 'Whats up 🤙' },
    { username: 'ninja', text: 'Lets go 🐱‍👤' },
  ]);
  const [username, setUsername] = useState('');

  // useState =  setting a variable || the unique way to set-up variable
  // useEffect = run code on a condition || block/piece/snippet of code that executed once the condition meet or component loads

  useEffect(() => {
    // run code here...messages

    // const username = prompt('Please enter your name');
    setUsername(prompt('Please enter your name'));

    // if its blank dependencies inside [], this code runs ONCE when the App component loads
    // if we have a variable like [input], it runs every time input changes
  }, []); // here's the condition

  // console.log(input);
  // console.log(messages);

  const sendMessage = (event) => {
    // all the logic to send the message goes here...

    // Prevent default refreshing when enter submit form button
    event.preventDefault();

    // Spread out the messages array and append to input
    setMessages([...messages, { username: username, text: input }]);

    // Input becomes empty string again
    setInput('');
  };

  return (
    <div className='App'>
      <h1>React Firebase Facebook Messenger Clone 🚀</h1>
      <h2>Welcome {username}</h2>

      <form>
        <FormControl>
          <InputLabel>Enter a message...💭</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />

          <Button
            disabled={!input}
            variant='contained'
            color='primary'
            type='submit'
            onClick={sendMessage}
          >
            Send Message
          </Button>
        </FormControl>
      </form>

      {messages.map((message) => (
        <Message username={message.username} text={message.text} />
      ))}
    </div>
  );
}

export default App;
