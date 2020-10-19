import React from "react";
import PlayerOne from "./PlayerOne";
import PlayerTwo from "./PlayerTwo";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>VP TRACKER</h1>
      <PlayerOne></PlayerOne>
      <PlayerTwo></PlayerTwo>
    </div>
  );
}

export default App;
