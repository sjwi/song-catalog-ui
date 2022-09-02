import React, { useEffect } from 'react'
import SongRow from './SongRow'
import SlidingPanel from 'react-sliding-side-panel'
import Song from 'js/flyouts/song/Song';
import { useState } from 'react';
import { Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { Dialog } from '@headlessui/react';

export default function SongList(props) {
  const [openSong, setOpenSong ] = useState(false);
  const [focusedSong, setFocusedSong ] = useState();

  useEffect(() => {
    if (props.songs.length > 0)
    setFocusedSong(props.songs[0])
  },[])

  return (
    <div className="w-full">
      <table className="table-fixed border-collapse table-fixed w-full text-md text-left">
        <tbody>
          {
            props.songs
            .filter((s) => s.related === 0)
            .map((s) =>
              <SongRow key={s.id} song={s} setOpenSong={setOpenSong} setFocusedSong={setFocusedSong} />
            )
          }
        </tbody>
      </table>
      <Transition show={openSong} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 z-40 md:hidden" onClose={() => setOpenSong(false)}>
          <Transition.Child
            enter="transition ease-in-out duration-300 transform"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
            as={Fragment}
            >
            <div className="flex relative z-10 flex-col w-full h-screen bg-red">
              {focusedSong && <Song song={focusedSong} setOpenSong={setOpenSong} />}
            </div>
          </Transition.Child>
          <Transition.Child
            enter="transition-opacity ease-linear duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            as={Fragment}>
            <Dialog.Overlay className="fixed inset-0 bg-grey-600 bg-opacity-50"></Dialog.Overlay>
          </Transition.Child>
        </Dialog>
      </Transition>
    </div>
  )
}
