import { useState } from "react";
import "./App.css";
import RepeatWindow from "./components/RepeatWindow";
import TimerStart from "./TimerStart";
import Header from "./components/Header";
import FakeGoogle from "./FakeGoogle";

function App() {
  const [timeDone , setTimeDone] = useState(false)
  return (
    <>
      <TimerStart setTimeDone={setTimeDone} />
      {timeDone === false && <FakeGoogle />}
      {timeDone === true && <Header />}
      {timeDone === true && <RepeatWindow />}
    </>
  );
}

export default App;
