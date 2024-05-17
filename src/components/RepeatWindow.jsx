import "./RepeatWindow.css";
import { useState, useEffect } from "react";
import data from "../assets/images_mignon.json";

function RepeatWindow() {
  const [counter, SetCounter] = useState(0);
  const [topWindow, SetTopWindow] = useState(250);
  const [leftWindow, SetLeftWindow] = useState(500);
  const [timeRemaining, setTimeRemaining] = useState(1800);
  const [counterDone , setCounterDone] = useState(false)

  function handleClick() {
    if (counter !== data.data.length - 1) {
      SetCounter(counter + 1);
    }

    SetTopWindow(Math.random() * 523);
    SetLeftWindow(Math.random() * 960);
    setTimeRemaining(timeRemaining + 5);
    if ( counter === data.data.length - 1 ){
      setCounterDone(true);
    }
    // Play audio when the close button is clicked
    const audio = new Audio(data.data[counter].sound_cool);
    audio.play();
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
      {counterDone === false && <div className="window" style={{ top: topWindow, left: leftWindow }}>
        <div className="topWindow">
          <p>Call to Nature - ne réponds pas</p>
          <button type="button" alt="counterButton" onClick={handleClick}>
            X
          </button>
        </div>
        <img alt={data.data[counter].index} src={data.data[counter].lien} />
        <p>{data.data[counter].citation}</p>
        <button>JE FAIS MA PAUSE</button>
      </div>}
      {counterDone === true && <div className="gotoPause" style={{top: "36vh" , left: "33vw" }}>
        <img alt="Angry Cat" src="../src/assets/angry cat.jpeg"/>
        <p>LE JEU EST TERMINE VA RESPIRER !!!</p>
        </div>}
      <div className="secondTimer">
        <p>Temps restant : </p>
        <p>
          {Math.floor(timeRemaining / 60)}min {timeRemaining % 60} sec
        </p>
      </div>
    </>
  );
}


export default RepeatWindow;