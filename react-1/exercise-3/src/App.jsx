import React from "react";
// import "./App.css";
import "../html/style.css"

function App() {
  return (
    <div id="app">
        <RegistrationForm />
        <DisplayMember />
    </div>
  )
}

const RegistrationForm = () => {
  return (
    // Code here
    <div className="container">
      <h1>Registration Form</h1>
      <form id="registrationForm">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

const DisplayMember = () => {
  const john = 'John Doe (john@example.com)';
  const jane = 'Jane Smith (jane@example.com)';
  
  return (
    // Code here
    <div className="members">
      <h2>Registered Members</h2>
      <div className="member">{john}</div>
      <div className="member">{jane}</div>
    </div>
  );
};

export default App;
