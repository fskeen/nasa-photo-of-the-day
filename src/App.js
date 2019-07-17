
import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios"

// Component imports
import Header from "../src/components/Header"
import PhotoDisplayContainer from "./components/PhotoDisplay/PhotoDisplayContainer";

function App() {
  const [photoObject, setPhotoObject] = useState({}) ;
  useEffect( () => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=Fa6glbUNP106XwnrrDLEzt4BhPZdZHOefCZDSgv9&date=2019-07-15`)
      .then((res) => {
        console.log(res)
        setPhotoObject(res.data) // why isn't this working?
      })
      .catch( err => console.log("Check out this error: ", err))
  }, []);

  return (
    <div className="App">
      <Header />
      
      <PhotoDisplayContainer
        pics={["a", "b", "c"]}
        url={photoObject.url}
        blurb={photoObject.explanation}
        date={photoObject.date}
        title={photoObject.title}
        copyright={photoObject.copyright}/>
    </div>
  );
}

export default App;
