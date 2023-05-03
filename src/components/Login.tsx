import React, { useState, FC } from "react";
import { useHistory } from "react-router-dom";

type Props = {
  authors: {
    author_name: string;
    password: string;
  }[];
};

const Login: FC<Props> = ({ authors }) => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const userData: {} = authors.find(
      (user) => user.author_name === name && user.password === password
    );

    // if (name === "admin admin") {                    // вход по логин
    // setToken(token)

    if (userData) {
      history.push("/taskslist");
    } else {
      history.push("/errorlogin");
    }
  };

  return (
    <div>
      <h1 className="title title--center">Sign in</h1>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label>Username </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
          </div>
          <div className="input-container">
            <label>Password </label>
            <input
              type="password"
              name="pass"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>
          <div className="button-container">
            <input type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
