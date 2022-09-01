import React from 'react'
import SetContainer from './SetContainer'
import AddButton from '../buttons/AddButton'

export default function SetList(props) {
  return (
    <div className="min-w-screen">
      {
        props.sets.map((s) =>
          <SetContainer key={s.id} set={s} />
        )
      }
    </div>
  )
}
