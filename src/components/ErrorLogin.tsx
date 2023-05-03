import React from "react";
import { useHistory } from "react-router-dom";

const ErrorLogin = () => {
  const history = useHistory();
  let back = () => {
    history.push("/");
  };
  return (
    <div className="wrapper">
      <h1 className="title title--center">Error</h1>
      <p>Incorrect username or password</p>
      <div className="button-container">
        <input type="button" onClick={() => back()} value="Back" />
      </div>
    </div>
  );
};

export default ErrorLogin;
