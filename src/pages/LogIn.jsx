import React, { useContext } from "react";
import "./user/Login.module.css";
import "./common/Register.module.css";
import request from "../server";
import { message } from "antd";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { TOKEN } from "../constants";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
const LogIn = () => {
  const {setIsAuthenticated} = useContext(AuthContext)
  const navigate = useNavigate();
  const login = async () => {
    try {
      let user = {
        username: "abdulaziz100",
        password: "1234567",
      };
      let {
        data: { token },
      } = await request.post("api/v1/auth/login", user);
      Cookies.set(TOKEN, token);
      setIsAuthenticated(true)
navigate("/myposts");
    } catch (err) {
      message.error("Error");
      toast.error("Error");
    }
  };

  return (
    <section>
      <div className="container">
        <h1>Login</h1>
        <label>
          <input type="text" name="Firstname" placeholder="User name" />
          <input type="password" name="Firstname" placeholder="Password" />

          <button onClick={login}>Login</button>
        </label>
      </div>
    </section>
  );
};

export default LogIn;
