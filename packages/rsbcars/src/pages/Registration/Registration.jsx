import React, { useState } from "react";

import { Form } from "components/_shared";

import { localStorageSet, localStorageGet } from "utils/localStorage";

const Registration = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const items = [
    { email: "", validate: ["emailValidation", "requiredValidation", "passwordValidation"] },
    { username: "", validate: ["requiredValidation"] },
    { password: "213123321", validate: ["passwordValidation"] },
  ];

  const handleSubmit = async () => {
    const userData = { email, username, password, role: ["user"] };
    console.log(userData);
    const response = await fetch("http://localhost:8000/api/auth/signup", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (response.status === 200) {
      const login = await fetch("http://localhost:8000/api/auth/signin", {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const { username, email, roles, accessToken } = await login.json();
      localStorageSet("accesToken", accessToken);
    }
  };

  return (
    <Form
      inputsWithValidations={{
        email: {
          value: email,
          validate: ["emailValidation", "requiredValidation"],
        },
        username: {
          value: username,
          validate: ["requiredValidation"],
        },
        password: {
          value: password,
          validate: ["passwordValidation"],
        },
      }}
      onSubmit={handleSubmit}
    >
      {(errors) => (
        <>
          {/* {console.log("email", errors["email"])} that's how you can get the errors for the every single input */}
          <input
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="text"
          />
          <input
            placeholder="Username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            type="text"
          />
          <input
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="text"
          />
          <input
            placeholder="ConfirmPassword"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            type="text"
          />
        </>
      )}
    </Form>
  );
};

export default Registration;
