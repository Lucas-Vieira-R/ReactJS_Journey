const ButtonsPads = ({ play }) => {
  return (
    <div className="flex-container">
    <div className='flex'>
      <button onClick={play} className='drum-pad' id='Heater-1'>Q<audio src='https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' className='clip' id='Q'></audio></button>
      <button onClick={play} className='drum-pad' id='Heater-2'>W<audio src='https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' className='clip' id='W'></audio></button>
      <button onClick={play} className='drum-pad' id='Heater-3'>E<audio src='https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' className='clip' id='E'></audio></button>
      <button onClick={play} className='drum-pad' id='Heater-4'>A<audio src='https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3' className='clip' id='A'></audio></button>
      <button onClick={play} className='drum-pad' id='clap'>S<audio src='https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' className='clip' id='S'></audio></button>
      <button onClick={play} className='drum-pad' id='Open-hh'>D<audio src='https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' className='clip' id='D'></audio></button>
      <button onClick={play} className='drum-pad' id='Kick_n_Hat'>Z<audio src='https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' className='clip' id='Z'></audio></button>
      <button onClick={play} className='drum-pad' id='kick'>X<audio src='https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' className='clip' id='X'></audio></button>
      <button onClick={play} className='drum-pad' id='closed-hh'>C<audio src='https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' className='clip' id='C'></audio></button>
    </div>
      </div>
  )
}
export default ButtonsPads