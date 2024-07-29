import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Background from "./Components/Background";
import Forground from "./Components/Forground";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="w-full h-screen bg-zinc-900 relative">

        <Background />
       <Forground />
      </div>
    </>
  );
}

export default App;
