import React from "react";
import RoundOne from "./components/RoundDesigns/RoundOne";
import RoundTwo from "./components/RoundDesigns/RoundTwo";
import RoundThree from "./components/RoundDesigns/RoundThree";
import RoundFour from "./components/RoundDesigns/RoundFour";
import RoundFive from "./components/RoundDesigns/RoundFive";
import Home from "./Home";

function App() {
  return (
    <div className="w-full h-screen font-bodyfont text-textColor bg-black relative overflow-hidden">
      <div className="max-w-screen-2x1 h-full mx-auto flex justify-center items-center">
        <Home />
      </div>
      <div className="w-full h-full abasolute top-0 left-0 z-10">
        <RoundOne />
        <RoundTwo />
        <RoundThree />
        <RoundFour />
        <RoundFive />
      </div>
    </div>
  );
}

export default App;
