import React from 'react'
import SongRow from './SongRow'

export default function SongList(props) {
  return (
    <div>
      {
        props.songs.map((s) =>
          <SongRow song={s} />
        )
      }
    </div>
  )
}
