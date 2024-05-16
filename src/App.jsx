import { useState } from "react";
import "./App.css";
import RepeatWindow from "./components/RepeatWindow";
import TimerStart from "./TimerStart";
import Header from "./components/Header";

function App() {
  const [timeDone , setTimeDone] = useState(false)
  console.log(timeDone)
  return (
    <>
      <TimerStart setTimeDone={setTimeDone} />
      {timeDone === true && <Header />}
      {timeDone === true && <RepeatWindow />}
    </>
  );
}

export default App;
