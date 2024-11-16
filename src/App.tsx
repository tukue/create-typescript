import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Message from './Message';

const App : React.FC= () => {
  const [userName, setUserName] = useState<string>('user')
  const [userMessage, setUserMessage ] = useState<string>('test message')

  useEffect(() => {
    setTimeout(() => {
      setUserName('testuser')
      setUserMessage( 'test message')
    }, 3000)
    return 
  }, [])
  // Define a tuple with 
  const user: [string, number] = ["testuser", 30]
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Name: {user[0]}, number: {user[1]}
        </p>
        <p>
          The type of first element is {typeof user[0]} and second element is {typeof user[1]} 
        </p> 
        <Message name={userName} message={userMessage} />
      </header>
    </div>
  );
}

export default App;
