import "./RepeatWindow.css";
import { useState, useEffect } from "react";
import dataMignon from '../assets/images_mignon.json'

export default function RepeatWindow() {
  const [counter, SetCounter] = useState(0);
  const [topWindow, SetTopWindow] = useState(250);
  const [leftWindow, SetLeftWindow] = useState(500);
  const [timeRemaining, setTimeRemaining] = useState(1800);

  function handleClick() {
    if (counter !== dataMignon.length - 1) {
      SetCounter(counter + 1);
    }

    SetTopWindow(Math.random() * 523);
    SetLeftWindow(Math.random() * 960);
    setTimeRemaining(timeRemaining + 5);

  }

  useEffect(() => {
    const timer = setTimeout(() => {
      if (timeRemaining > 0) {
        setTimeRemaining(timeRemaining - 1);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeRemaining]);

  return (
    <>
      <div className="window" style={{ top: topWindow, left: leftWindow }}>
        <div className="topWindow">
          <p>Call to Nature - ne réponds pas</p>
          <button type="button" alt="counterButton" onClick={handleClick}>
            X
          </button>
        </div>
        <img alt={dataMignon.data[counter].index} src={dataMignon.data[counter].lien} />
        <p>{dataMignon.data[counter].index}</p>
        <button>JE FAIS MA PAUSE</button>
      </div>
      <div className="secondTimer">
        <p>Temps restant : </p>
        <p>
          {Math.floor(timeRemaining / 60)}min {timeRemaining % 60} sec
        </p>
      </div>
    </>
  );
}
