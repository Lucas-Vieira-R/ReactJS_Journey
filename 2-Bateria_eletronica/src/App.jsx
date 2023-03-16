import './App.css'
import { useState } from 'react'
import ButtonsPads from './ButtonsPads'


export default function App() {


  const [descrition, setDescrition] = useState('')
  document.addEventListener('keydown', handleKey)

  function play(e) {
    let volume = document.getElementById('volume');
    e.target.firstElementChild.volume = parseFloat(volume.value) / 100
    e.target.firstElementChild.play();
    setDescrition(e.target.id);
    changeClass(e.target);

  }
  function changeClass(element) {
    element.classList.add('active')
    setTimeout(() => {
      element.classList.remove('active');
    }, "200")
  }
  function handleKey(e) {
    let volume = document.getElementById('volume');
    const keyPressed = e.key.toUpperCase()
    const audios = document.querySelectorAll('audio.clip')
    audios.forEach(audio => keyPressed === audio.id ? audio.volume = parseFloat(volume.value) / 100 : null)
    audios.forEach(audio => keyPressed === audio.id ? audio.play() : null)
    audios.forEach(audio => keyPressed === audio.id ? setDescrition(audio.parentElement.id) : null)

    audios.forEach(audio => keyPressed === audio.id ? changeClass(audio.parentElement) : null)

  }


  return (
    <main>
      <div id='drum-machine'>
        <div id='display'>
          <p id='volume_title'>Volume</p>
          <input id='volume' type='range' min="0" max="100"></input>
          <p id='description'>{descrition}</p>
        </div>
        <ButtonsPads play={play} />

      </div>
    </main>
  )
}
