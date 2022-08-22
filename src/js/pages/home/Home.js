import LoadingSongs from 'js/components/loading/LoadingSongs'
import React, { Component } from 'react'
import SongList from 'js/components/songs/SongList'

export default function Home(props){
  return (
    <div>
      {props.songsLoading && <LoadingSongs/>}
      {!props.songsLoading && <SongList songs={props.songs} setSongs={props.setSongs}/>}
    </div>
  )
}
