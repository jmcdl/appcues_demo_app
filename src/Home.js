import React, { useState } from "react";
import squirrel from "./resources/squirrel.jpg";

const ANGRY_MOOD = "angry :/";
const HAPPY_MOOD = "happy :)";

const Home = () => {
  const [mood, setMood] = useState(ANGRY_MOOD);
  return (
    <div className="app-content">
      <h1>Welcome to this feature-rich test application</h1>
      <h2>We're glad you're here</h2>
      <img
        src={squirrel}
        alt="a cute little squirrel peering at you from the tall grass"
      ></img>
      <button
        className="hello-button"
        disabled={mood === HAPPY_MOOD}
        onClick={() => setMood(HAPPY_MOOD)}
      >
        Say Hello
      </button>
      <div>
        Mr squirrel is: <span className="mood-text">{mood}</span>
      </div>
    </div>
  );
};

export default Home;
