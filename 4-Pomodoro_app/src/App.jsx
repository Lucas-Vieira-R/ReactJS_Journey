import { useState, useContext } from 'react'
import './App.css'
import { ThemeProvider, ThemeContext } from './context/themeContext'
import ThemeButtonSwitch from './components/ThemeButtonSwitch'
import SessionControl from './components/SessionControl'
import BreakControl from './components/BreakControl'
import Timer from './components/Timer'
import Title from './components/Title'

function App() {
  const theme = useContext(ThemeContext)

  return (
    <div className={theme.darkTheme?'app dark':'app light'}>
      <ThemeButtonSwitch />
      <Title />
      <div className='flex'>
        <SessionControl />
        <Timer />
        <BreakControl /> 
      </div>
          
    </div>
  )
}

export default App
