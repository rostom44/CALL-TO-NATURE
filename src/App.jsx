import "./App.css";
import RepeatWindow from "./components/RepeatWindow";
import TimerStart from "./TimerStart";
import Header from "./components/Header";
function App() {
  return (
    <>
      <TimerStart />
      <Header />
      <RepeatWindow />
    </>
  );
}

export default App;
