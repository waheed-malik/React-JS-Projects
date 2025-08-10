import { useState } from "react";
import styled from "styled-components";
import NumberSelector from "./NumberSelector"
import TotalScore from "./TotalScore"
import RoleDice from "./RoleDice";
import { Button } from "../styled/Button";


const GamePlay = () => {

    const [score,setScore]= useState(0);
    const [selectedNumber, setSelectedNumber] = useState();
    const [currentDice, setCurrentDice] = useState(1);
    const [error, setError] = useState("");

      const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

 const rollDice = () => {
  if (!selectedNumber) {
   setError("You have not selected any number");
    return;
  }
  setError("");

  const randomNumber = generateRandomNumber(1, 6);
  setCurrentDice(randomNumber);

  if (selectedNumber === randomNumber) {
    setScore((prev) => prev + randomNumber);
  } else {
    setScore((prev) => prev - 2);
  }

  setSelectedNumber(undefined); // optional
};

  return (
    <MainContainer>
   <div className="top_section">
    <TotalScore  score={score}/>
   <NumberSelector
   error={error}
   setError={setError}
   selectedNumber={selectedNumber} 
   setSelectedNumber={setSelectedNumber}
   />
   </div>
   <RoleDice currentDice={currentDice}
   rollDice={rollDice}/>
   <div className="btns">
    <Button >Reset</Button>
    <Button>Show Rules</Button>
   </div>
    </MainContainer>
  )
}

export default GamePlay;

const MainContainer= styled.main`
padding-top: 70px;
.top_section{
    display: flex;
    justify-content: space-around;
    align-items: end;
}

.btns{
  gap:10px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
`;