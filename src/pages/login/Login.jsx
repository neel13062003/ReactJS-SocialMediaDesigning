import { Link } from "react-router-dom";
import "./login.css";

export default function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Lamasocial</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Lamasocial.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <label htmlFor="email" className="loginLabel">
              Email
            </label>
            <input id="email" type="email" className="loginInput" placeholder="Enter your email" />

            <label htmlFor="password" className="loginLabel">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="loginInput"
              placeholder="Enter your password"
            />

            <button className="loginButton">Log In</button>
            <span className="loginForgot">Forgot Password?</span>

              Create a New Account
          </div>
        </div>
      </div>
    </div>
  );
}

