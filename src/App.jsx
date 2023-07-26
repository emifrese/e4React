import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Chronometer from "./components/Chronometer";

function App() {
  const [chronometer, setChronometer] = useState(false);

  return (
    <>
      <div>
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <h1>Vite + React: Chronometer</h1>
      <div className="card">
        <button onClick={() => setChronometer((status) => !status)}>
          {chronometer ? "Hide Chronometer" : "Show Chronometer"}
        </button>
        {chronometer && <Chronometer />}
      </div>
    </>
  );
}

export default App;
