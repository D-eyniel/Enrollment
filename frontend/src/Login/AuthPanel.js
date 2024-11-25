import React, { useState, useEffect } from "react";
import "./AuthPanel.css";
import ResetPassword from "./ResetPassword";

function App() {
  const [activePage, setActivePage] = useState("login");
  const [fadeClass, setFadeClass] = useState("");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderPage = () => {
    switch (activePage) {
      case "login":
        return (
          <>
            <h1>Login</h1>
            <p>
              Don't have an account?{" "}
              <button onClick={() => setActivePage("register")} className="nav-button">
                Register
              </button>
            </p>
            <hr className="line" />
            <form className="Login">
              <a>Email:</a>
              <input type="email" />
              <a>Password:</a>
              <input type="password" />
              <button className="login-button" type="submit">LOGIN</button>
              <p>
                Forgot Password?{" "}
                <button onClick={() => setActivePage("reset")} className="nav-button">
                  Reset Password
                </button>
              </p>
            </form>
          </>
        );
      case "register":
        return (
          <>
            <h1>Register</h1>
            <p>
              Already Registered?{" "}
              <button onClick={() => setActivePage("login")} className="nav-button">
                Login
              </button>
            </p>
            <hr className="line" />
            <form className="Register">
              <a>Name:</a>
              <input type="text" />
              <a>Email:</a>
              <input type="email" />
              <a>Password:</a>
              <input type="password" />
              <a>Confirm Password:</a>
              <input type="password" />
              <button className="register-button" type="submit">REGISTER</button>
            </form>
          </>
        );
      case "reset":
        return <ResetPassword onBackToLogin={() => setActivePage("login")} />;
      default:
        return null;
    }
  };

  useEffect(() => {
    setFadeClass("fade-in");

    const timer = setTimeout(() => {
      setFadeClass("");
    }, 1000);

    return () => clearTimeout(timer);
  }, [activePage]);

  const universityText = windowWidth <= 768
    ? "CvSU - Bacoor Campus"
    : "Cavite State University - Bacoor Campus";

  return (
    <div className="login-container">
      <div className="statue-image"></div>
      <div className="right-panel">
        <div className={`form-container ${fadeClass}`}>
          {renderPage()}
        </div>
      </div>

      <div className="centered-header">
        <h2>{universityText}</h2>
      </div>

      <footer className="footer">
        <p>© Copyright Cavite State University - Bacoor | CvSU Enrollment Portal</p>
      </footer>
    </div>
  );
}

export default App;
