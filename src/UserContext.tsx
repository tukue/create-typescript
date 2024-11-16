import React from 'react';


interface UserContextType {

    name: string;
  
    message: string;
  
  } 

export const userContext = React.createContext<UserContextType>({name: 'user', message: 'test message'});  