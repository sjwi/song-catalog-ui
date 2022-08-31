import React from 'react'
import SongRow from './SongRow'

export default function SongList(props) {
  return (
    <table className="table-fixed border-collapse table-fixed w-full text-md text-left bg-grey-100">
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
