import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import scriptInsertAxios from './insertAxios'
import Header from './Header'
scriptInsertAxios();

let holdResponse = [];
const axCall = axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2012-03-14")
  .then((response) => {
    console.log(response);
    holdResponse.push(response.data);
  })
  .catch((e) => console.log(e));



function App() {
  if (!holdResponse.photoOfTheDay) return <h3>Loading...</h3>
  return (
    <div className="App">
     <Header className='header' />
     <MainSection className='main-body' props={holdResponse} />
    </div>
  );
}

export default App;
