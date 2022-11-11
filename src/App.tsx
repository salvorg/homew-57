import React, {useState} from 'react';
import {User} from "./types";
import UserForm from "./components/UserForm/UserForm";
import Users from "./components/Users/Users";

function App() {
  const [users, setUsers] = useState<User[]>([]);

  const addUser = (newUser: User) => {
    setUsers(prev => [...prev, newUser]);
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="row mt-2">
          <div className="col">
            <UserForm onSubmit={addUser}/>
          </div>
          <div className="col">
            <Users users={users}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;