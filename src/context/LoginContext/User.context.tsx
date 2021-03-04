import React, {useState} from 'react';

export interface UserContextInterface {
  saveUser: (user: any) => void;
  user: any;
}

export const UserContext = React.createContext<UserContextInterface>(null);

const UserContextProvider: React.FC = ({children}) => {
  const [user, setUser] = useState<any>(null);

  const saveUser = (user: any) => {
    setUser(user);
  };

  return (
    <UserContext.Provider value={{saveUser, user}}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
