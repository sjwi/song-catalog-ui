import LoadingSongs from 'js/components/loading/LoadingSongs'
import LoadingSets from 'js/components/loading/LoadingSets'
import React, { Component } from 'react'
import SetList from 'js/components/sets/SetList'
import SongList from 'js/components/songs/SongList'

export default function Home(props){
  return (
    <div className="flex overflow-x-auto snap-x snap-mandatory min-w-screen">
      <div className="flex min-w-screen snap-start" id="songPage">
        {props.songsLoading && <LoadingSongs/>}
        {!props.songsLoading && <SongList songs={props.songs} setSongs={props.setSongs}/>}
      </div>
      <div className="flex min-w-screen h-100 snap-start bg-grey-300" id="setPage">
        {props.setsLoading && <LoadingSets/>}
        {!props.setsLoading && <SetList sets={props.sets} setSets={props.setSets}/>}
      </div>
    </div>
  )
}
