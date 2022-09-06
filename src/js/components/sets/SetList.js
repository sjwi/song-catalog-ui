import React from 'react'
import SetContainer from './SetContainer'

export default function SetList(props) {
  return (
    <div className="min-w-screen">
      {
        props.sets.map((s) => {
          return <SetContainer key={`${props.sets.id}-${s.id}`} set={s} songs={props.songs} />
        }
        )
      }
    </div>
  )
}
