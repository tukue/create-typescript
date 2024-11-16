import React from 'react'; 

interface MessageProps {

    name: string;
  
    message: string;
  
  }

const Message: React.FC<MessageProps> = ({ name, message }) => {
    return (
          <div>
            <p> {name}:{message}</p>
        
        </div>
    ); 
} 

export default Message;