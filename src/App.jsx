import React, { useState } from 'react'
import './App.css'
import prankSound from './assets/prank.wav';
import CustomButton from './components/CustomButton'
import { BUTTONS } from './utils'
const audio = new Audio(prankSound);

function App() {

  // This is another way to do
  // const handleOnClick = (e)=> {
  //   const {textContent } = e.target;
  //   console.log("I am clicked", textContent )
  // }

  const [strToDisplay, setStrToDisplay] = useState("")
  const [lastOperator, setLastOperator] = useState("")
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
      audio.play();
      totalNumber += random;
    }
    setStrToDisplay(totalNumber.toString());
  };


  const handleOnClick = (value) => {
    setIsPrank(false);
    if (value === "AC") {
      setStrToDisplay("")
      return;
    }

    // C should remove the last char
    if (value === "C") {
      return (setStrToDisplay(strToDisplay.slice(0, -1)));
    }


    // Get total
    if (value === "=") {
      return getTotal();
    }

    if (value === ".") {
      // If anyone pressed . in the beginning
      if (strToDisplay === "") {
        return setStrToDisplay(strToDisplay + "0.");
      }

      //   If anyone pressed . twice in a row
      const lastChar = strToDisplay.slice(-1);
      if (lastChar === ".") {
        return;
      }
      //    Do not allow . if there is already . in string
      //   if (strToDisplay.includes(".")) {
      //     return;
      //   }
      //   Check if . exists in string to dispay after lastOperator
      if (!lastOperator) {
        if (strToDisplay.includes(".")) {
          return;
        }
      }
      const lastOperatorIndex = strToDisplay.lastIndexOf(lastOperator);
      const lastNumberSet = strToDisplay.slice(lastOperatorIndex);
      if (lastNumberSet.includes(".")) {
        return;
      }
    }

    if (strToDisplay.length === 0 && operators.includes(value)) {
      return;
    }

    // Operator conditions
    if (operators.includes(value)) {
      setLastOperator(value)
      const lastChar = strToDisplay.slice(-1);
      if (operators.includes(lastChar)) {
        return;
      }
      if (lastChar === ".") {
        setStrToDisplay(strToDisplay + "0")
      }
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
            return <CustomButton key={button.label} cls={button.cls} label={button.label} clickHandler={handleOnClick} />
          })}
        </div>
      </div>
    </>
  )
}

export default App