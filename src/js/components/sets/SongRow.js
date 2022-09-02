import React from 'react'

function SongRow(props) {
  return (
    <tr className="border-b border-t border-grey-300 text-slate-500 max-h-1 text-sm">
      <td className="w-4 my-auto">
        <div className="w-100">
          <svg id="icon" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <polygon points="16 28 9 21 10.41 19.59 16 25.17 21.59 19.59 23 21 16 28"/>
            <polygon points="16 4 23 11 21.59 12.41 16 6.83 10.41 12.41 9 11 16 4"/>
            <rect className="fill-transparent" data-name="&lt;Transparent Rectangle&gt;" height="32" id="_Transparent_Rectangle_" width="32"/>
          </svg>
        </div>
      </td>
      <td key={props.song.id} className="py-1 pl-2 text-xs font-light">
        {props.song.name}
      </td>
      <td className="w-12">
        <select id="setKey" className="relative my-1 bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue focus:border-blue-500 block w-full p-1">
          <option value="G">G</option>
          <option>C</option>
        </select>
      </td>
      <td className="pl-2 w-8 text-right">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} className="w-6 h-6 stroke-grey-600 hover:stroke-grey-800 hover:ring-1 hover:ring-offset-1 hover:ring-grey-300 hover:ring-rounded-full hover:ring-offset-grey-300 rounded-full">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </td>
    </tr>
  )
}

export default SongRow