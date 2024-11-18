import React, { useContext } from 'react'; 
import { UserContext } from './UserContext';


const Message: React.FC = () => {
    const context = useContext(UserContext);
    if (!context) {
        return <div> user context must be used within UserfProvider  </div>
    }
    return (
          <div>
            <p> {context.name},{context.message}</p>
        
        </div>
    ); 
} 

export default Message;