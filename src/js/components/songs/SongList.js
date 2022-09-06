import React, { useEffect } from 'react'
import SongRow from './SongRow'
import SlidingPanel from 'react-sliding-side-panel'
import Song from 'js/flyouts/song/Song';
import { useState } from 'react';
import { Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { Dialog } from '@headlessui/react';
import { buildFocusedSong } from 'js/functions/songs';
import { XIcon } from '@heroicons/react/outline';
import Overlay from '../modals/Overlay';

export default function SongList(props) {
  const [openSong, setOpenSong ] = useState(false);
  const [focusedSong, setFocusedSong ] = useState();

  useEffect(() => {
    let urlparts = window.location.pathname.split('/');
    let focusedSong = props.songs[0]
    if (urlparts.length > 1 && !isNaN(urlparts.at(-1)) && urlparts.at(-2) === "song") {
      setOpenSong(true);
      focusedSong = props.songs.filter((s) => s.id === parseInt(urlparts.at(-1)))[0];
    }
    setFocusedSong(buildFocusedSong(focusedSong, props.songs))
  },[])

  const closeSong = () => {
    setOpenSong(false);
    const title = "Song Catalog";
    window.history.pushState({"pageTitle": title}, "", "/");
    setTimeout(() => document.title = title, 100)
  }

  return (
    <div className="w-full">
      <table className="table-fixed border-collapse table-fixed w-full text-md text-left">
        <tbody>
          {
            props.songs
            .filter((s) => s.related === 0)
            .map((s) =>
              <SongRow key={s.id} song={s} songs={props.songs} setOpenSong={setOpenSong} setFocusedSong={setFocusedSong} />
            )
          }
        </tbody>
      </table>
      <Transition show={openSong} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 z-60 md:hidden" onClose={() => setOpenSong(false)}>
          <Transition.Child
            enter="transition ease-in-out duration-300 transform"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
            as={Fragment}
            >
            { focusedSong &&
              <div className="z-20 relative">
                  <div className="absolute top-2 right-4 z-20">
                    <button onClick={closeSong} className="text-primary w-7 h-7" ><XIcon/></button>
                  </div>
                <div className="flex overflow-x-auto h-full snap-x snap-mandatory scrollbar-hide">
                  {
                    focusedSong.map(s => {
                      return <div key={s.id} className="flex snap-start relative z-10 flex-col min-w-full w-full h-screen scrollbar-hide bg-white">
                        {<Song song={s} />}
                      </div>
                    })
                  }
                </div>
              </div>
            }
          </Transition.Child>
          <Overlay />
        </Dialog>
      </Transition>
    </div>
  )
}
