import React from 'react'

function Song(props) {
  return (
    <div>
      <div>{props.song.name}</div>
      <button onClick={() => props.setOpenSong(false)} >close</button>
    </div>
  )
}

export default Song