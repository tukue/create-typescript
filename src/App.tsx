import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Message from './Message';
import { UserContext } from './UserContext';  

const App : React.FC= () => {
  const [userName, setUserName] = useState<string>('user')
  const [userMessage, setUserMessage ] = useState<string>('test message')


  const contextValue = {
    name: userName,
    message: userMessage
};

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
    // Use the UserContext.Provider to wrap the Message component
    <UserContext.Provider value={contextValue}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Name: {user[0]}, number: {user[1]}
        </p>
        <p>
          The type of first element is {typeof user[0]} and second element is {typeof user[1]} 
        </p> 
        <Message />
        </header>
    </UserContext.Provider>
  );
}

export default App;
