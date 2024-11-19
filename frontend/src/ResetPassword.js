import React from "react";
import "./AuthPanel.css";

function ResetPassword({ onBackToLogin }) {
  return (
    <div className="reset-password-container">
      <h1>Reset Password</h1>
      <hr className="line"></hr>
      <form className="reset-password-form">
        <a>Enter Your Registered Email:</a>
        <input type="email" required />
        <button type="submit">Send Reset Link</button>
      </form>
      <p>
        Remembered your password? {" "}
        <button onClick={onBackToLogin} className="toggle-button">
          Back to Login
        </button>
      </p>
    </div>
  );
}

export default ResetPassword;
