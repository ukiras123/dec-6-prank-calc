import React, { useState } from 'react'
import './App.css'
import prankSound from './assets/prank.wav';
import CustomButton from './components/CustomButton'
import { BUTTONS } from './utils'

function App() {

  // This is another way to do
  // const handleOnClick = (e)=> {
  //   const {textContent } = e.target;
  //   console.log("I am clicked", textContent )
  // }

  const [strToDisplay, setStrToDisplay] = useState("")
  const [isPrank, setIsPrank] = useState(false);

  const operators = ["+", "-", "*", "/", "%"];

  const randomNumber = () => {
    return Math.round(Math.random() * 10) + 1;
  };

  const getTotal = () => {
    const random = randomNumber();
    const lastChar = strToDisplay.slice(-1);
    if (operators.includes(lastChar)) {
      // remove the last char operator
      setStrToDisplay(strToDisplay.slice(0, -1))
    }
    //   Eval will always give a number back, converting number to string
    let totalNumber = eval(strToDisplay);
    //   Prank Case
    if (random < 4) {
      setIsPrank(true)
      const audio = new Audio(prankSound);
      audio.play();
      totalNumber += random;
    }
    setStrToDisplay(totalNumber.toString());
  };
  

  const handleOnClick = (value)=> {
    if (value === "AC") {
      setStrToDisplay("")
      return;
    }

      // C should remove the last char
      if (value === "C") {
        return(setStrToDisplay(strToDisplay.slice(0, -1)));
      }


      // Get total
    if (value === "=") {
      return getTotal();
    }

      setStrToDisplay(strToDisplay + value)

  }
  return (
    <>
     <div className="wrapper">
    <h1>Prank Calculator</h1>
    <small>Disclaimer: Ans might be incorrect in case you are pranked</small>
    <div className="calculator">
      <div className={isPrank ? "display prank" : 'display'}>{strToDisplay}</div>
      {BUTTONS.map(button => {
        return <CustomButton key={button.label} cls={button.cls} label={button.label} clickHandler={handleOnClick}/>
      })}
    </div>
  </div>
    </>
  )
}

export default App