import React, { useContext, useState, createContext } from "react";

const ThemeContext = createContext()

function ThemeProvider(props){
    const [darkTheme, setDarkTheme] = useState(false)
    const toggleTheme = ()=>{
        setDarkTheme(!darkTheme)
    }

    return(
    <ThemeContext.Provider value={{darkTheme,toggleTheme}}>
        {props.children}
    </ThemeContext.Provider>
    )
}

export {ThemeProvider, ThemeContext }