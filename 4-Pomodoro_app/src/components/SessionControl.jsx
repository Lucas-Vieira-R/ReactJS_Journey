import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/appContext'
import { MdAddCircle,MdRemoveCircle } from "react-icons/md";

function SessionControl() {
    const session = useContext(AppContext)
  return (
    <div className='flex-center-column'>
        <h4 id='session-label'>Session Length</h4>
        <button id='session-increment' className='controls' onClick={session.incrementSession}><MdAddCircle  style={{fontSize:'25px'}}/></button>
        <p id='session-length'>{session.sessionTime}</p>
        <button id='session-decrement' className='controls' onClick={session.decrementSession}><MdRemoveCircle  style={{fontSize:'25px'}}/></button>
    </div>
  )
}

export default SessionControl