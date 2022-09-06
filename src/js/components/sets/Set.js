import React from 'react'
import SetContainer from './SetContainer'
import SetSongs from './SetSongs'

function Set(props) {
  return (
    <div className="w-screen bg-grey-200">
      <div className="pt-14">
        <SetContainer set={props.set} songs={props.songs} />
      </div>
      <div className="py-2 h-screen">
        <SetSongs set={props.set} songs={props.songs} />
      </div>
    </div>
  )
}

export default Set