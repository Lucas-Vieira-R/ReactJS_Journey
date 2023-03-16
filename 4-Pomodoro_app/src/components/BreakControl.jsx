import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/appContext';
import { MdAddCircle,MdRemoveCircle } from "react-icons/md";


function BreakControl() {
    const breakElem = useContext(AppContext)
  return (
    <div className='flex-center-column'>
        <h4 id='break-label'>Break Length</h4>
        <button id='break-increment' className='controls' onClick={breakElem.incrementBreak}><MdAddCircle style={{fontSize:'25px'}}/></button>
        <p id='break-length'>{breakElem.breakTime}</p>
        <button id='break-decrement' className='controls' onClick={breakElem.decrementBreak}><MdRemoveCircle style={{fontSize:'25px'}} /></button>
    </div>
  )
}

export default BreakControl