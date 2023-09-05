import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("");

  const nameDisplay = (event) => {
    setName(event.target.value);
  };

  const [bio, setBio] = useState("");
  const bioDisplay = (evl) => {
    setBio(evl.target.value);
  };

  return (
    <div className="container">
      <img
        src="https://media.thairath.co.th/image/5E0tSvMisGWWtGXp1V2lT36wYvZLloLqZO2soKADk2OU3we9vA1.png"
        alt=""
        width={100}
      />
      <br /> <br />
      <input
        type="text"
        placeholder="name here"
        onChange={(event) => nameDisplay(event)}
      />
      &nbsp; &nbsp;
      <input
        type="text"
        placeholder="short bio"
        onChange={(evl) => bioDisplay(evl)}
      />
      <h1> {name === "" ? "Your name here" : name}</h1>
      <p>{bio === "" ? "Short Bio" : bio}</p>
      <a href="http://www.facebook.com" target="_blank">
        Facebook
      </a>
      &nbsp; &nbsp;
      <a href="http://www.twitter.com" target="_blank">
        Twitter
      </a>
    </div>
  );
};

export default App;
