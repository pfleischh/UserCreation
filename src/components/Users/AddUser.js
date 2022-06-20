import React, { useState, Fragment, useRef } from "react";

import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const passwordInputRef = useRef();

  //const [enteredUsername, setEnteredUsername] = useState("");
  // [enteredPassword, setEnteredPassword] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserPassword = passwordInputRef.current.value;

    if (
      enteredName.trim().length === 0 ||
      enteredUserPassword.trim().length === 0
    ) {
      setError({
        title: "Invalid Input",
        message: "Username and Password cannot be blank",
      });
      return;
    }
    if (enteredUserPassword.trim().length < 6) {
      setError({
        title: "Invalid Password",
        message: "Password must be at least 6 characters",
      });
      return;
    }

    props.onAddUser(enteredName, enteredUserPassword);

    nameInputRef.current.value = '';
    passwordInputRef.current.value = '';
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}

      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={nameInputRef} />
          <label htmlFor="password">Password</label>
          <input id="password" type="text" ref={passwordInputRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Fragment>
  );
};

export default AddUser;
