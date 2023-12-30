
import React from 'react';
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import Nav from './Nav';
import DogList from './DogList';
import DogDetails from './DogDetails';
import './App.css';

function App(props) {
  const { dogs } = props;

  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/dogs" element={<DogList dogs={dogs}/>} />
          <Route path="/dogs/:name" element={<DogDetails dogs={dogs} />} />
          {/* Redirect any other route to "/dogs" */}
          <Route path="*" element={<Navigate to="/dogs" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: 'https://www.princeton.edu/sites/default/files/styles/1x_full_2x_half_crop/public/images/2022/02/KOA_Nassau_2697x1517.jpg?itok=Bg2K7j7J',
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: 'https://www.hindustantimes.com/ht-img/img/2023/08/25/1600x900/international_dog_day_1692974397743_1692974414085.jpg',
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Labrador_Retriever_portrait.jpg/1200px-Labrador_Retriever_portrait.jpg',
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: 'https://www.southernliving.com/thmb/9E2guP65DZP_ZnUP13pcVG8Sfmc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1285438779-2000-9ea25aa777df42e6a046b10d52b286b7.jpg',
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]
}

export default App;
