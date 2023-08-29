import React from "react";
import "./App.css";

function App() {
  return (
    <div id="app">
      <h1>Enter Data</h1>
      <RunningForm />
      <TableDisplay />
    </div>
  );
}

const RunningForm = () => {
  return (
    <div className="data-form">
      <form id="data-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="What is your name?"/>

        <br />
        <br />

        <label htmlFor="age">Age:</label>
        <input type="number" id="age" name="age" placeholder="How old are you?"/>

        <br />
        <br />

        <label htmlFor="weight">Weight:</label>
        <input type="number" id="weight" name="weight" placeholder="Kg."/>

        <br />
        <br />

        <label htmlFor="running">Current Running (Minutes):</label>
        <input type="number" id="running" name="running" placeholder="Min."/>
        
        <br />
        <br />

        <button type="button" onClick="addData()">Add Data</button>

      </form>
    </div>
  );
}

const TableDisplay = () => {
  return (
    <div className="data-table">
      <h1>Entered Data</h1>
      <table id="data-table" border="1" width="100%">
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Weight</th>
          <th>Current Running (Minutes)</th>
          <th>Good Running</th>
        </tr>
      </table>
    </div>
  );
}

export default App;
