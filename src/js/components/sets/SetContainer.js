import React from 'react'
import { useNavigate } from 'react-router-dom';
import SongRow from './SongRow'

export default function SetContainer(props) {
  const navigate = useNavigate();
  return (
    <div key={props.set.id} className="relative w-88 sm:w-full max-w-101 rounded mb-6 mt-3 min-h-50 shadow-lg mx-auto bg-white">
      <div className="absolute left-4 top-3 text-xxs font-light">
        {props.set.nameSuffix}
      </div>
      <div className="pt-7 font-normal" onClick={() => navigate(`/set/${props.set.id}`, { state : { songs: props.songs } })}>
        {props.set.namePrefix}
      </div>
      <div className="absolute right-4 top-3">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </div>

      <div className="w-11/12 mx-auto mt-4">
        <table className="table-fixed border-collapse table-fixed w-full text-md text-left">
          <tbody>
            {
              props.set.songs.map((s,i) => {
                let storedS = props.songs.filter((song) => song.id === s.id)[0];
                return <SongRow key={`${s.id}-${props.set.id}-${i}`} song={storedS} />
              })
            }
          </tbody>
        </table>
      </div>
      <div className="flex bg-grey-700 w-full rounded-b">
        <div className="flex w-1/2 h-full items-center justify-center hover:bg-grey-600 py-1">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </div>
        <div className="flex w-1/2 items-center justify-center hover:bg-grey-600 py-1">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
          </svg>
        </div>
      </div>
    </div>
  )
}

