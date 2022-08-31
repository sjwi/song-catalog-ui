import React from 'react'

export default function SetContainer(props) {
  return (
    <div className="w-80 rounded my-4 h-40 shadow-md mx-auto bg-white">
      {props.set.setListName}
    </div>
  )
}
