import CardsController from "./Cards.jsx";
import "../styles/app.css";
import { useState } from "react";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clicked, setClicked] = useState([]);

  function handleClick(cardName) {
    if (clicked.includes(cardName)) {
      setScore(0);
      setClicked([]);
    } else {
      setClicked([...clicked, cardName]);
      setScore(score + 1);
      if (score + 1 > bestScore) {
        setBestScore(score + 1);
      }
      if (score + 1 === 10) {
        setScore("YOU WIN!");
      }
    }
  }

  //add fonts
  return (
    <>
      <header>
        <h1>LOTR Memory Game</h1>
        <div className="scores">
          <div>Score: {score}</div>
          <div>Best Score: {bestScore}</div>
        </div>
      </header>
      <CardsController onClick={handleClick} />
    </>
  );
}

export default App;
