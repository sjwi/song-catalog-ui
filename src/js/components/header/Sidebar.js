import React, { Fragment, Component } from 'react'
import { XIcon } from '@heroicons/react/outline'
import { Transition, Dialog } from '@headlessui/react'
import { classNames } from 'js/functions/styling';

export default class Sidebar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Transition show={this.props.isOpen} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 z-40 md:hidden" onClose={() => this.props.setIsOpen(false)}>
          <Transition.Child
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
            as={Fragment}
            >
            <div className="flex relative z-10 flex-col w-72 h-screen bg-blue border-r md:hidden">
              <button
                type="Button" onClick={() => this.props.setIsOpen(false)} value="Close sidebar"
                className="hover:ring-1 hover:ring-grey-300 flex absolute top-2 right-2 justify-center items-center w-10 h-10 rounded-full">
                <XIcon className="h-6 w-6 text-white" />
              </button>
              <div className="md:hidden">
                <div className="px-2 pt-2 mt-8 pb-3 space-y-1">
                  {this.props.navigation.map((item) => (
                    <button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current ? '' : 'hover:text-grey-300',
                        'block px-3 py-2 rounded-md text-base font-medium text-white text-lg'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </div>
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
    )
  }
}
