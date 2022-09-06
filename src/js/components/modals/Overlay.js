import React from 'react'
import { Transition, Dialog } from '@headlessui/react'
import { Fragment } from 'react'

function Overlay() {
  return (
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
  )
}

export default Overlay