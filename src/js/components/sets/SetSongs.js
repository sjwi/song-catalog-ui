import { useEffect, useRef, useState } from 'react';
import React from 'react'
import {SCROLL_DOWN, SCROLL_UP } from 'js/App'

function SetSongs(props) {

  const refRunning = useRef(false);

  useEffect(() => {
    
    const handleScroll = event => {
      if (window.scrollY == 0)
        refRunning.current = false;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])

  let setScrollPositions = {}
  const scrollDown = (e) => {
    const targId = e.target.id;
    const curPos = document.getElementById(targId).scrollTop;
    let dir = SCROLL_UP;
    if (targId in setScrollPositions) {
      let prevPos = setScrollPositions[targId];
      dir = curPos - prevPos > 0 ? SCROLL_DOWN : SCROLL_UP;
    }
    if (dir == SCROLL_DOWN) {
      if (!refRunning.current) {
        refRunning.current = true;
        window.scrollTo({
          top: window.innerHeight,
          left: 0,
          behavior: 'smooth'
        });
      }
    }
    setScrollPositions[targId] = curPos;
  }
  return (
    <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide h-full bg-grey-200 px-3 scroll-smooth">
      {
        props.set.songs.map((s) => {
          return (
            <div key={s.id} className="flex snap-start min-w-screen w-screen h-full rounded px-2">
              <div className="bg-white w-full rounded">
                <div id={`set-song-container-${s.setListSongId}`} className="w-full h-full overflow-y-scroll overflow-x-hide text-center text-primary song scrollbar-hide" onScroll={scrollDown}>
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