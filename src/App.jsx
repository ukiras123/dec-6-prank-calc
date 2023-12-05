import React, { useState } from 'react'
import './App.css'
import CustomButton from './components/CustomButton'

function App() {

  const handleOnClick = (e)=> {
    console.log("I am clicked")
  }

  const BUTTONS = [
    {
      cls: 'btn btn-ac',
      label: 'AC'
    },
    {
      cls: 'btn btn-c',
      label: 'C'
    },
    {
      cls: 'btn btn-per',
      label: '%'
    },
    {
      cls: 'btn btn-plus',
      label: '+'
    },
    {
      cls: 'btn btn-minus',
      label: '-'
    },
    {
      cls: 'btn btn-x',
      label: '*'
    },
    {
      cls: 'btn btn-dot',
      label: '.'
    },
    {
      cls: 'btn btn-divide',
      label: '/'
    },
    {
      cls: 'btn btn-equals',
      label: '='
    },
    {
      cls: 'btn btn-1',
      label: '1'
    }, {
      cls: 'btn btn-2',
      label: '2'
    }, {
      cls: 'btn btn-3',
      label: '3'
    }, {
      cls: 'btn btn-4',
      label: '4'
    },
    {
      cls: 'btn btn-5',
      label: '5'
    },
    {
      cls: 'btn btn-6',
      label: '6'
    },
    {
      cls: 'btn btn-4',
      label: '4'
    },
    {
      cls: 'btn btn-7',
      label: '7'
    },
    {
      cls: 'btn btn-8',
      label: '8'
    },
    {
      cls: 'btn btn-9',
      label: '9'
    },
    {
      cls: 'btn btn-0',
      label: '0'
    },
  ]
  return (
    <>
     <div className="wrapper">
    <h1>Prank Calculator</h1>
    <small>Disclaimer: Ans might be incorrect in case you are pranked</small>
    <div className="calculator">
      <div className="display">0.00</div>

    {BUTTONS.map(button => {
      return <CustomButton key={button.label} cls={button.cls} label={button.label}/>
    })}
    {/* <CustomButton cls={"btn btn-ac"} label={"AC"}/> */}

 


{/* 
      <div className="btn btn-ac" onClick={handleOnClick}>AC</div>
      <div className="btn btn-c" onClick={handleOnClick}>C</div>

      <div className="btn btn-per" onClick={handleOnClick}>%</div>
      <div className="btn btn-plus">+</div>
      <div className="btn btn-minus">-</div>
      <div className="btn btn-x">*</div>
      <div className="btn btn-dot">.</div>
      <div className="btn btn-divide">/</div>
      <div className="btn btn-equals">=</div>

      <div className="btn btn-1">1</div>
      <div className="btn btn-2">2</div>
      <div className="btn btn-3">3</div>
      <div className="btn btn-4">4</div>
      <div className="btn btn-5">5</div>
      <div className="btn btn-6">6</div>
      <div className="btn btn-7">7</div>
      <div className="btn btn-8">8</div>
      <div className="btn btn-9">9</div>
      <div className="btn btn-0">0</div> */}
    </div>
  </div>
    </>
  )
}

export default App
