import React, { useState } from "react";

function App() {
  // adding state here.
  const [Display, setDisplay] = useState();

  const handleClick = (value) => {
    // code here.
    setDisplay(value);
  };

  return (
    <div>
      <button onClick={() => handleClick("Fullname")}>Fullname</button>
      <button onClick={() => handleClick("Age")}>Age</button>
      <button onClick={() => handleClick("Picture")}>Picture</button>
      <DisplayInfo Displays={Display} />
    </div>
  );
}

function DisplayInfo(props) {
  const { Displays } = props;
  let element;
  if (Displays === "Fullname") {
    element = <h2>John Doe</h2>;
  } else if (Displays === "Age") {
    element = <h2>30</h2>;
  } else if (Displays === "Picture") {
    element = <img src="https://via.placeholder.com/150" alt="Placeholder" />;
  } else {
    element = <p>Please select an option.</p>;
  }

  return <div>{element}</div>;
}

export default App;
