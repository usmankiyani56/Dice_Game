import MainPage from "./components/MainPage";
import GamePage from "./components/GamePage";
import { useState } from "react";



function App() {
  const [isGameStarted, setisGameStarted] = useState(false);
  const toggleGamePlay = () =>{
    setisGameStarted((prev) => !prev)
    console.log("play btn clicked")
  }
  return (
    <>
      {
        isGameStarted ?  <GamePage/>  : <MainPage toggle={toggleGamePlay}/>
      } 
     {/* <GamePage/> */}
    </>
  );
}

export default App;
