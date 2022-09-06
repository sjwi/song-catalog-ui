import React from 'react'

function SetSongs(props) {
  return (
    <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide h-full bg-grey-200 px-3">
      {
        props.set.songs.map((s) => {
          return (
            <div key={s.id} className="flex snap-start min-w-screen w-screen h-full rounded px-2">
              <div className="bg-white w-full rounded">
                {s.name}
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default SetSongs