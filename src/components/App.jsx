import React, { useState } from "react";

function App() {
  let time = new Date().toLocaleTimeString("it-IT");
  const [clock, setClock] = useState(time);

  function setTime() {
    const newTime = new Date().toLocaleTimeString("it-IT");
    setClock(newTime);
  }
  setInterval(setTime, 1000);

  return (
    <div className="container">
      <h1>{clock}</h1>
      <button onClick={setTime}>Get Time</button>
    </div>
  );
}

export default App;
