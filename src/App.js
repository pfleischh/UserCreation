import React, { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UserList";

function App() {
  const [usersList, setUserList] = useState([]);

  const addUserHandler = (uName, uPassword) => {
    setUserList((prevUsersList) => {
      return [...prevUsersList, {name: uName, password: uPassword, id: Math.random().toString()}];
    });
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
