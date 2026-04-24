import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import ProgressBar from "./components/ProgressBar";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCount((count) => count + 1);
    }, 100);
  }, []);

  return (
    <>
      <div className="app">
        <span>Progress Bar</span>
        <ProgressBar value={count} />
      </div>
    </>
  );
}

export default App;
