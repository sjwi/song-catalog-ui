import React from 'react'
import SongRow from './SongRow'

export default function SongList(props) {
  return (
    <table className="table-fixed border-collapse table-fixed w-full text-md text-left">
      <tbody>
        {
          props.songs.map((s) =>
            <SongRow key={s.id} song={s} />
          )
        }
      </tbody>
    </table>
  )
}
