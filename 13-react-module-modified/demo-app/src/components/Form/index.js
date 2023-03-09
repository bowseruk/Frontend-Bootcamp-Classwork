import React, { useState } from "react";
import "./style.css";

function Form() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }
  function handleEmailChange(event) {
    setEmail(event.target.value);
  }
  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // Alert the user their first and last name, clear the inputs
    alert(`Hello ${username}`);
    console.log(`User name: ${username}`);
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <form>
      <div>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
        />
      </div>
      <div>
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <div>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <button type="button" onClick={handleFormSubmit}>
        Submit
      </button>
    </form>
  );
}

export default Form;
