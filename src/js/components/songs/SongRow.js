import React from 'react'

function SongRow(props) {
  const openSong = () => {
    props.setFocusedSong(props.song);
    props.setOpenSong(true);
  }
  return (
    <tr className="border-b border-t border-grey-300 text-slate-500 max-h-1">
      <td className="py-3 w-8 text-right">
        <input type="checkbox" className="self-center flex float-right w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded-full hover:ring-0 focus:ring-0 text-blue"></input>
      </td>
      <td className="py-3 pl-3 truncate font-light text-sm truncate" onClick={openSong}>
        {props.song.name}
      </td>
      <td className="py-3 w-8 text-right">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} className="w-6 h-6 stroke-grey-600 hover:stroke-grey-800 hover:ring-1 hover:ring-offset-1 hover:ring-grey-300 hover:ring-rounded-full hover:ring-offset-grey-300 rounded-full">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </td>
    </tr>
  )
}

export default SongRow