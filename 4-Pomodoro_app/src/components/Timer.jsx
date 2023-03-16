import React from 'react'
import { useContext, useEffect } from 'react'
import { AppContext } from '../context/appContext'
import src from '../audios/beep.mp3'
import { MdPlayArrow,MdPause,MdRestartAlt } from "react-icons/md";

function Timer() {
  const timer= useContext(AppContext)


  return (
    <div className='flex-center-column' id='timer'>
        <div className='flex-center-column'>
            <h4 id='timer-label'>{timer.typeOfprocess}</h4>
            <h3 id='time-left'>{timer.min<10?'0'+timer.min:timer.min}:{timer.sec<10?'0'+timer.sec:timer.sec}</h3>
        </div>
        <div>
            <button id='start_stop' onClick={timer.powerOn?()=>timer.setPowerOn(false):()=>timer.setPowerOn(true)}>
            {timer.powerOn?<MdPause  style={{fontSize:'35px'}}/>:<MdPlayArrow  style={{fontSize:'35px'}}/>}
            </button>
            <button id='reset' onClick={()=>timer.reset()}><MdRestartAlt  style={{fontSize:'35px'}}/></button>
        </div>
        <audio src={src} type='audio.mp3' id='beep'/>
    </div>
  )
}

export default Timer