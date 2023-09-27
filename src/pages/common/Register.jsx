import React from "react";

import "../user/Login.module.css";
const Register = () => {
  return (
    <section>
      <div className="container">
        <h1>Register</h1>
        <label>
          <input type="text" name="Firstname" placeholder="First name" />
          <input type="text" name="Firstname" placeholder="Last name" />
          <input type="text" name="Firstname" placeholder="User name" />
          <input type="password" name="Firstname" placeholder="Password" />
          <input
            type="password"
            name="Firstname"
            placeholder="Confirm password"
          />
          <button>Register</button>
        </label>
      </div>
    </section>
  );
};

export default Register;
