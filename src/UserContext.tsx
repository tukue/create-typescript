import {createContext} from 'react';


interface UserContextType {

    name: string;
  
    message: string;
  
  } 

export const UserContext = createContext<UserContextType>({name: 'user', message: 'test message'});  
