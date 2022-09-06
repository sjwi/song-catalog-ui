import React, { Fragment, Component } from 'react'
import { Transition, Dialog } from '@headlessui/react'
import Overlay from 'js/components/modals/Overlay';

function CreateItem(props) {
  const createSong = () => {
    props.setOpenCreateItem(false);
  }
  const createSet = () => {
    props.setOpenCreateItem(false);
  }
  return (
    <Transition show={props.openCreateItem} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 z-40 md:hidden" onClose={() => props.setOpenCreateItem(false)}>
        <Transition.Child
          enter="transition ease-in-out duration-300 transform"
          enterFrom="translate-y-under"
          enterTo="translate-y-show-48"
          leave="transition ease-in-out duration-300 transform"
          leaveFrom="translate-y-show-48"
          leaveTo="translate-y-under"
          as={Fragment}
          >
          <div className="w-screen h-36 bg-white z-60 relative text-white px-6 bg-transparent">
            <button onClick={createSong} className="mt-3 mb-2 py-3 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-full">
              Create Song
            </button>
            <button onClick={createSet} className="mb-3 py-3 w-full bg-green-500 hover:bg-green-700 text-white font-bold px-4 rounded-full">
              Create Set
            </button>
          </div>
        </Transition.Child>
        <Overlay />
      </Dialog>
    </Transition>
  )
}

export default CreateItem