import { NavLink } from "react-router-dom";
import logo from "../../../assets/Logo(1).svg";
import "./Header.module.css";
import { TOKEN } from "../../../constants";
import Cookies from "js-cookie";
const Header = () => {
  let token = Cookies.get(TOKEN);
  return (
    <header className="black">
      <div className="container d-flex jc-sb">
        <div className="logo">
          {token ? (
            <NavLink to="myposts">MyPosts</NavLink>
            ) : (
            <img src={logo} alt="" />
          )}
        </div>
        <ul>
          <li>
            <NavLink className="link" to="/">
              Home
            </NavLink>
            <NavLink className="link" to="/blog/:blogsId">
              Blog
            </NavLink>
            <NavLink className="link" to="/about-us">
              About us
            </NavLink>
            <NavLink className="link" to="/register">
              Register
            </NavLink>
          </li>
          {token ? (
            <NavLink className="btn" to="/accaunt">
              Accaunt
            </NavLink>
          ) : (
            <NavLink className="btn" to="/login">
              Login
            </NavLink>
          )}
        </ul>
      </div>
    </header>
  );
};

export default Header;
