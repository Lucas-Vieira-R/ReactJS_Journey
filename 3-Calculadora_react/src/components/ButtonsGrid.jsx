import React from 'react'
import Buttons from './Buttons'
import { useState } from 'react'

function ButtonsGrid({sentence, setSentence, actualValue, setActualValue, resultIsDisplayed, setBoolean}) {
  const [soundPower,setPower] = useState('OFF')
  function checkPower(e){
    console.log(soundPower)
    if(soundPower==='OFF'){
      setPower('ON')
      e.target.classList.add('on')
    }else{
      setPower('OFF')
      e.target.classList.remove('on')
    }
  }
  return (
    <div className='flex'>
      <button className='powerSound' onClick={checkPower}>Sound: {soundPower}</button>
      <Buttons sentence={sentence} setSentence={setSentence} actualValue={actualValue} setActualValue={setActualValue} resultIsDisplayed={resultIsDisplayed} setBoolean={setBoolean} soundPower={soundPower} /> 
    </div>
        
  )
}

export default ButtonsGrid