import React from "react";
import Card from "../UI/Card";
import classes from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            Username: ({user.name}) Password: ({user.password})
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
