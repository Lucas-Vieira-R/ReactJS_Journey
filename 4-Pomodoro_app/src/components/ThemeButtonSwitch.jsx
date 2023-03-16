import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../context/themeContext'
import { MdLightMode, MdDarkMode } from 'react-icons/md'

function ThemeButtonSwitch() {

    const theme = useContext(ThemeContext)
  return (
    <button id='themeToggle' onClick={theme.toggleTheme}>{theme.darkTheme?<MdDarkMode fontSize={'50px'}/>:<MdLightMode fontSize={'50px'} />}</button>
  )
}

export default ThemeButtonSwitch