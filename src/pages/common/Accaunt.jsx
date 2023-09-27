import Cookies from "js-cookie";
import React from "react";
import { TOKEN } from "../../constants";

const Accaunt = () => {
  const logout = () => {
    Cookies.remove(TOKEN);
  };
  return (
    <section>
      <div className="container">
        <h1>Account</h1>
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
          <button className="log" onClick={logout}>
            Logout
          </button>
          <button>Save</button>
        </label>
      </div>
    </section>
  );
};

export default Accaunt;
