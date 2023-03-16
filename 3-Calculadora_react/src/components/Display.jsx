import React from 'react'

function Display({sentence, actualValue}) {
  return (
    <div id='displayVisor'>
        <p id='display'>{sentence}</p>
        <p>{actualValue}</p>
    </div>
  )
}

export default Display