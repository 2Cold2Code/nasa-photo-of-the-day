import React from "react";
import "./App.css";
import axios from 'axios';

let axCall = axios.get("https://api.nasa.gov/planetary/apod").then(response => {
  console.log(response);
})
.catch(e=>console.log(e));

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
