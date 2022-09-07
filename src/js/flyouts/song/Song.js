import React from 'react'
import { XIcon } from '@heroicons/react/outline'

function Song(props) {
  return (
    <>
      <div className="w-full h-full overflow-y-scroll overflow-x-hide text-center text-primary song scrollbar-hide">
        <h1 className="text-xl mt-12">
          {props.song.name}
        </h1>
        <hr className="z-20 mx-4 mb-0 mt-3 rounded-full opacity-50"/>
        <p className="text-left whitespace-pre mt-3 px-4 pb-16 text-sm">
          {props.song.body}
        </p>
      </div>
    </>
  )
}

export default Song