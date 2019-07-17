import React, { useState } from "react";
import "./App.css";
// Component imports
import Header from "../src/components/Header"
import PhotoDisplayContainer from "./components/PhotoDisplay/PhotoDisplayContainer";

function App() {

  const [photos, setPhotos] = useState([]) 

  return (
    <div className="App">
      <Header />
      <PhotoDisplayContainer />
    </div>
  );
}

export default App;
