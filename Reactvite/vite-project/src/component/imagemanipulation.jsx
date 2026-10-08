import React, { useState } from 'react';
import car from '../images/car.jpg';

function ImageManipulation() {
  const [heightImage, setHeightImage] = useState(150);
  const [widthImage, setWidthImage] = useState(250);
  const [color, setColor] = useState("white");

  function increaseHeight() {
    setHeightImage(heightImage + 10);
  }

  function decreaseHeight() {
    setHeightImage(heightImage - 10);
  }

  function increaseWidth() {
    setWidthImage(widthImage + 10);
  }

  function decreaseWidth() {
    setWidthImage(widthImage - 10);
  }

  return (
    <div>

      <h1 style={{ color: "red" }}>
        Image Manipulation
      </h1>

     
      <div
        style={{
          border: "2px solid red",
          height: "200px",
          width: "300px",
          backgroundColor: color,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden"
        }}
      >
    
        <img
          src={car}
          alt="Car"
          style={{
            width: `${widthImage}px`,
            height: `${heightImage}px`,
            objectFit: "cover"
          }}
        />
      </div>

      <br />

      <button onClick={increaseHeight}>
        Increase Height
      </button>

      <button onClick={decreaseHeight}>
        Decrease Height
      </button>

      <button onClick={increaseWidth}>
        Increase Width
      </button>

      <button onClick={decreaseWidth}>
        Decrease Width
      </button>

      <br />
      <br />

      <button onClick={() => setColor("red")}>
        Red
      </button>

      <button onClick={() => setColor("green")}>
        Green
      </button>

      <button onClick={() => setColor("blue")}>
        Blue
      </button>

      <button onClick={() => setColor("yellow")}>
        Yellow
      </button>

      <button onClick={() => setColor("black")}>
        Black
      </button>

      <button onClick={() => setColor("white")}>
        White
      </button>

    </div>
  );
}

export default ImageManipulation;