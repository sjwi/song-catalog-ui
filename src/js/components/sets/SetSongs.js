import { useEffect, useRef, useState } from 'react';
import React from 'react'
import {SCROLL_DOWN, SCROLL_UP } from 'js/App'

function SetSongs(props) {

  const [ atBottom, setAtBottom ] = useState(false);

  useEffect(() => {
    const handleScroll = event => {
      if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight)
        setAtBottom(true);
      else
        setAtBottom(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide h-full bg-grey-200 px-3 scroll-smooth">
      {
        props.set.songs.map((s) => {
          return (
            <div key={s.id} className="flex snap-start min-w-screen w-screen h-full rounded px-2">
              <div className="bg-white w-full rounded">
                <div id={`set-song-container-${s.setListSongId}`} className={`w-full h-full ${atBottom? "overflow-y-scroll": "overflow-y-hidden"} overflow-x-hide text-center text-primary song scrollbar-hide`} >
                  <h1 className="text-xl mt-12">
                    {s.name}
                  </h1>
                  <hr className="z-20 mx-4 mb-0 mt-3 rounded-full opacity-50"/>
                  <p className="text-left whitespace-pre mt-3 px-4 pb-16 text-sm">
                    {s.body}
                  </p>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default SetSongs;