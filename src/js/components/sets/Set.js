import React, { useEffect } from 'react'
import SetContainer from './SetContainer'
import SetSongs from './SetSongs'

function Set(props) {
  useEffect(() => {
    document.title = props.set.setListName;
  }, [])
  return (
    <div className="w-screen bg-grey-300">
      <div className="pt-14 snap-start">
        <SetContainer set={props.set} songs={props.songs} />
      </div>
      <div className="py-2 h-screen snap-start">
        <SetSongs set={props.set} songs={props.songs} />
      </div>
    </div>
  )
}

export default Set