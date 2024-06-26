import React, { useState, useEffect } from "react";
import "./TimerStart.css";
import song from "./assets/perfect-beauty-191271 (2).mp3"; // Import your audio file

function TimerStart({ setTimeDone }) {
  const [time, setTime] = useState(10);
  const [isActive, setIsActive] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(true);

  const [timeVisible, setTimeVisible] = useState(false);
  const [initialTime, setInitialTime] = useState(""); // Modifier l'état initial de initialTime

 
  const [songPlaying, setSongPlaying] = useState(false); // Manage song playing state
  const [audio] = useState(new Audio(song)); // Create audio object


  const toggleTimer = () => {
    setIsActive(true);
    setButtonVisible(false);

    setTimeVisible(true);
    setTime(parseInt(initialTime)); // Convertir le temps initial en nombre
  };

  const handleInputChange = (event) => {
    setInitialTime(event.target.value);

    setSongPlaying(true); // Start playing the song when the timer starts

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
      // Don't stop the song when the timer ends
    }
  }, [time]);

  // Play or pause the song when the songPlaying state changes
  useEffect(() => {
    if (songPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [songPlaying, audio]);

  return (
    <div>
      {timeVisible && (
        <div className="timer">
          <p>
            {Math.floor(time / 60)} min {time % 60} sec
          </p>
        </div>
      )}
      <div className="inputContainer">
        {buttonVisible && (
          <>
            <p>Temps de travail :</p>
            <input
              placeholder="Entrez le temps en secondes"
              value={initialTime}
              onChange={handleInputChange}
            />
          </>
        )}
      </div>
      <div className="btnTimer">
        {buttonVisible && <button onClick={toggleTimer}>Go !</button>}
      </div>
    </div>
  );
}

export default TimerStart;
