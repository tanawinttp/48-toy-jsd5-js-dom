import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [Age, setAge] = useState("");
  const [image, setImage] = useState("");
  const [displayedData, setDisplayedData] = useState("");

  const handleDisplay = (data) => {
    setDisplayedData(data);
  };
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="yous name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Age"
          value={Age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          type="text"
          placeholder="URL image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>
      <br />
      <div>
        <button onClick={() => handleDisplay(name)}>Full name</button>
        <br />
        <br />
        <button onClick={() => handleDisplay(Age)}>Age</button>
        <br />
        <br />
        <button onClick={() => handleDisplay(<img src={image} alt="" />)}>Picture</button>
      </div>
      <div>
        <p>Show Display : {displayedData} </p>
      </div>
    </>
  );
}

export default App;
