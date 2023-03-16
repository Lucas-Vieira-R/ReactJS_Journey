import React from 'react'
import { evaluate } from 'mathjs'
import useSound from 'use-sound'
import KeySound from '../audio/KeySound.mp3'


function Buttons({setSentence, setActualValue, sentence, actualValue, resultIsDisplayed, setBoolean, soundPower}) {
    const [playSound] = useSound(KeySound)

    const clear = function(){
        if(soundPower==='ON'){
            playSound()
        }
        setSentence('0')
        setActualValue('0')
    }
    const equals = function(e){
        if(soundPower==='ON'){
            playSound()
        }
        setBoolean(true)
        let result = evaluate(sentence)
        setActualValue(result.toString())
        setSentence(result.toString())
        
        
    }
    const add = function(e) {
        if(soundPower==='ON'){
            playSound()
        }
        let str = e.target.innerHTML;
        let sentenceArray = sentence.split(/[\+\-\*\/]/);
        let lastChar = sentence.slice(-1);
        let twoLastChar = sentence[sentence.length-2];


        if (str === '.' && (sentenceArray[sentenceArray.length -1].includes('.') || actualValue.includes('.'))) {
            return;
        }
    
        if(str === '/' || str === '*' || str === '+' || str === '-') {
            if(str==='-' &&(lastChar === '/' || lastChar === '*' || lastChar === '+')){
                setSentence(sentence + str);
                setBoolean(false)
            }
            else if(lastChar === '-' && (str === '/' || str === '*' || str === '+') && (twoLastChar==='/'||twoLastChar==='*'||twoLastChar==='+')){
                setSentence(sentence.slice(0,-2) + str)
                setBoolean(false)
            }
            else if (lastChar === '-' && (str === '/' || str === '*' || str === '+')) {
                setSentence(sentence.slice(0,-1) + str)
                setBoolean(false)
            } else if(lastChar === '/' || lastChar === '*' || lastChar === '+') {
                setSentence(sentence.slice(0,-1) + str)
                setBoolean(false)
            } else {
                setSentence(sentence + str);
                setBoolean(false)
            }
            setActualValue("0");
            setBoolean(false)
        }else {
            if(resultIsDisplayed && (str==='0'||str==='1'||str==='2'||str==='3'||str==='4'||str==='5'||str==='6'||str==='7'||str==='8'||str==='9')){
                setBoolean(false)
                setSentence(str)
                setActualValue(str)  
            }else{
                setSentence(sentence === '0' ? str : sentence + str);
                setActualValue(actualValue === '0' ? str : actualValue + str);
                setBoolean(false)
            }

        }
    }
    
    
    

    const values = [{'value':'AC','id':'clear','onclick':clear,'divId':'Clear'},
                    {'value':'/','id':'divide','onclick':add,'divId':'Divide'},
                    {'value':'*','id':'multiply','onclick':add,'divId':'Multiply'},
                    {'value':'7','id':'seven','onclick':add,'divId':'Seven'},
                    {'value':'8','id':'eight','onclick':add,'divId':'Eight'},
                    {'value':'9','id':'nine','onclick':add,'divId':'Nine'},
                    {'value':'-','id':'subtract','onclick':add,'divId':'Subtract'},
                    {'value':'4','id':'four','onclick':add,'divId':'Four'},
                    {'value':'5','id':'five','onclick':add,'divId':'Five'},
                    {'value':'6','id':'six','onclick':add,'divId':'Six'},
                    {'value':'+','id':'add','onclick':add,'divId':'Add'},
                    {'value':'1','id':'one','onclick':add,'divId':'One'},
                    {'value':'2','id':'two','onclick':add,'divId':'Two'},
                    {'value':'3','id':'three','onclick':add,'divId':'Three'},
                    {'value':'=','id':'equals','onclick':equals,'divId':'Equals'},
                    {'value':'0','id':'zero','onclick':add,'divId':'Zero'},
                    {'value':'.','id':'decimal','onclick':add,'divId':'Decimal'}]

  return (
    <div id='ButtonsGrid'>
        {values.map(value => <div className='buttonDiv' id={value.divId}><button id={value.id} onClick={value.onclick}>{value.value}</button></div>)}
    </div>
  )
}

export default Buttons