import { createContext, useState, useContext, useEffect } from "react";

const AppContext = createContext()
const delay = (ms) => {
    const startPoint = new Date().getTime()
    while (new Date().getTime() - startPoint <= ms) {/* wait */}
  }
  

function AppProvider(props){
    /*----------------Increment and decrement of the session an break lenght-------------------------------*/ 
    const [sessionTime,setSessionTime] = useState(25)
    const [breakTime, setBreakTime] = useState(5)

    const incrementSession = ()=>{
        if(sessionTime<60){
            setSessionTime(sessionTime+1)
        }
    }
    const decrementSession = ()=>{
        if(sessionTime>1){
            setSessionTime(sessionTime-1)
        }
    }

    const incrementBreak = ()=>{
        if(breakTime<60){
            setBreakTime(breakTime+1)
        }
    }
    const decrementBreak = ()=>{
        if(breakTime>1){
            setBreakTime(breakTime-1)
        }    
    }
    /*-------------------------Timer logic:---------------------------------------------------------------------------*/
    const [typeOfprocess,setTypeOfProcess] = useState('session')
    let[[min,sec],setClockOn] = useState([25,0])
    let [powerOn,setPowerOn] = useState(false)
    let [nextProcess,setNext] = useState(true)

    function decrementTimer(){
        /*----------------------handles the tick-----------------------------------*/
        if(min==0 && sec==0){
            /*-------------------------Change session to break and vice versa--------------------------------------*/
            (typeOfprocess==='session'?setTypeOfProcess('break'):setTypeOfProcess('session'));
            setClockOn([typeOfprocess=='break'?sessionTime:breakTime,0])
            /*-------------------------toggle next process to activate useEffect--------------------------------------*/
            setNext(!nextProcess)
        }else{
            if(sec===0 && min!=0){
            setClockOn([min-1,59])
        }else{
            setClockOn([min,sec-1])

        } 
    }}

    useEffect(()=>{
        /*-------------------------update the timer when the lenghts are changed--------------------------------------*/
        setClockOn([(typeOfprocess==='session'?sessionTime:breakTime),0])
    },[sessionTime,breakTime])

    useEffect(()=>{
        /*-------------------------start the clock--------------------------------------*/
        if(powerOn){
            let tick = setInterval(decrementTimer,1000)
            return ()=>clearInterval(tick)
        }else{
            clearInterval()
        }
    },[sec,powerOn])

    useEffect(()=>{
        /*-------------------------handles the type of process change, to display the new valu and then starts the clock again--------------------------------------*/
        if(powerOn){
            setClockOn([typeOfprocess=='break'?sessionTime:breakTime,0])
            let audio = document.getElementById('beep')
            audio.play()
            delay(1000)
            setClockOn([min-1,59])
        }
    },[nextProcess])


    function reset(){
        /*-------------------------reset :)--------------------------------------*/
        setPowerOn(false)
        setClockOn([25,0])
        setSessionTime(25)
        setBreakTime(5)
        setClockOn([25,0])
        setTypeOfProcess('session')
        let audio = document.getElementById('beep')
        audio.pause()
        audio.currentTime = 0;
    }


    return(
        <AppContext.Provider value={{sessionTime,breakTime,incrementSession,incrementBreak,decrementBreak,decrementSession,min,sec,typeOfprocess,setPowerOn,powerOn,reset,nextProcess}}>
            {props.children}
        </AppContext.Provider>
    )
}

export {AppContext, AppProvider}

