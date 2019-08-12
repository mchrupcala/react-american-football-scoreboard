//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";



function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);

const handleHomeScore = points => {
  setHomeScore(homeScore + points);
}

const handleAwayScore = points => {
  setAwayScore(awayScore + points);
}

  const [quarter, setQuarter] = useState(1);

  const handleQuarter = i => {
    if (quarter < 4) {
      setQuarter(i + quarter);
      // console.log(quarter);
    }
    else {
      setQuarter(1);
      // console.log(quarter);
    }

  }

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow quarter={quarter}/>
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={() => handleHomeScore(7)}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={() => handleHomeScore(3)}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={() => handleAwayScore(7)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={() => handleAwayScore(3)}>Away Field Goal</button>
        </div>
        <div>
          <button className="newButtons__changeQuarter" onClick={() => handleQuarter(1)} >Change Quarter</button>
        </div>
      </section>
    </div>
  );
}

export default App;
