import { useState, useEffect } from "react";
import "./TimerStart.css";

function TimerStart({ setTimeDone }) {
  const [time, setTime] = useState(10);
  const [isActive, setIsActive] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(true);
  const [timeVisible, setTimeVisible] = useState(true);

  const toggleTimer = () => {
    setIsActive(true);
    setButtonVisible(false);
  };

  useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isActive]);

  useEffect(() => {
    if (time === 0) {
      setIsActive(false);
      setButtonVisible(false);
      setTimeVisible(false);
      setTimeDone(true);
    }
  }, [time]);

  return (
    <div>
      {timeVisible && (
        <div className="timer">
          <p>
            {Math.floor(time / 60)} min {time % 60} sec
          </p>
        </div>
      )}
      <div className="btnTimer">
        {buttonVisible && <button onClick={toggleTimer}>Go !</button>}
      </div>
      <footer className="foot">©️ CALL TO NATURE</footer>
    </div>
  );
}

export default TimerStart;
