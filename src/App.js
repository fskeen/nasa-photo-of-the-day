
import React, { useState, useEffect } from "react";
// import "./App.scss";
import axios from "axios"
import styled from 'styled-components'
import {colors} from "../src/components/StyledVariables"

// Component imports
import Header from "../src/components/Header"
import MediaDisplayContainer from "./components/MediaDisplay/MediaDisplayContainer";



function App() {
  const AppContainer = styled.div`
    background-color: ${colors.primary.light};
    height: 100%;
  `

  const [photoObject, setPhotoObject] = useState({}) ;
  useEffect( () => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=Fa6glbUNP106XwnrrDLEzt4BhPZdZHOefCZDSgv9`)
      .then((res) => {
        setPhotoObject(res.data) // why isn't this working?
      })
      .catch( err => console.log("Check out this error: ", err))
  }, []);

  return (
    <AppContainer>
      <Header />
      
      <MediaDisplayContainer
        pics={["a"]}
        object={photoObject}
        media_type={photoObject.media_type}
      />
        {console.log(photoObject)}
    </AppContainer>
  );
}

export default App;
