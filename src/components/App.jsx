import CardsController from "./Cards.jsx";
import "../styles/app.css";
import { useState } from "react";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clicked, setClicked] = useState([]);

  function handleClick(inputId) {
    console.log("clicked");
    if (clicked.includes(inputId)) {
      setScore(0);
      //randomize
    } else {
      setClicked([...clicked, inputId]);
      setScore(score + 1);
      if (score + 1 > bestScore) {
        setBestScore(score + 1);
      }
      if (score + 1 === 10) {
        console.log("YOU WIN!");
      }
      //randomize
    }
  }

  //add fonts
  return (
    <div className="container">
      <header>
        <h1>LOTR Memory Game</h1>
        <div>
          <div>Score: {score}</div>
          <div>Best Score: {score}</div>
        </div>
      </header>
      <CardsController onClick={handleClick} />
    </div>
  );
}

export default App;
