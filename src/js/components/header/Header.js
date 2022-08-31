/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react'
import { Disclosure, Menu, Transition, Dialog } from '@headlessui/react'
import { MenuIcon, XIcon, ChevronDownIcon } from '@heroicons/react/outline'
import Search from './Search'
import Sidebar from './Sidebar'
import Login from '../modals/Login.js'
import { classNames } from 'js/functions/styling'
import { getUserRole, getUserObject } from 'js/auth/TokenManager'
import { ROLES } from 'js/auth/PermissionsMap'
import APIErrorNotification from '../errors/APIErrorNotification'

const navigation = [
  { name: 'Songs', href: '#', current: true },
  { name: 'Set Lists', href: '#', current: false },
  { name: 'Orgs', href: '#', current: false },
]

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [role, setRole] = useState(getUserRole());
  return (
    <div>
      <Sidebar navigation={navigation} isOpen={isNavOpen} setIsOpen={setIsNavOpen} />
      <Login isOpen={isLoginOpen} setIsOpen={setIsLoginOpen} setRole={setRole} />
      <APIErrorNotification />
      <Disclosure as="nav" className="bg-blue min-w-screen">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-2 md:px-6 lg:px-8">
              <div className="relative flex items-center justify-between h-14">
                <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                  {/* Mobile menu button*/}
                  <button onClick={() => setIsNavOpen(true)} className="inline-flex items-center justify-center p-2 rounded-md text-white-400 hover:text-white focus:outline-none focus:ring-1 focus:ring-inset focus:ring-white text-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6 hover:text-grey-300" aria-hidden="true" />
                    )}
                  </button>
                  <Search classes="ml-2" />
                </div>
                <div className="flex-1 flex items-center justify-center md:items-stretch md:justify-start">
                  <div className="flex-shrink-0 flex items-center">
                    <img
                      className="block md:hidden h-10 w-fill object-cover"
                      src="/images/favicon_white.png"
                      alt="Workflow"
                    />
                    <img
                      className="hidden md:block h-10 w-fill object-cover"
                      src="/images/favicon_white.png"
                      alt="Workflow"
                    />
                  </div>
                  <div className="hidden md:block md:ml-6">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current ? '' : 'hover:text-grey-300',
                            'px-3 py-2 rounded-md text-sm text-white font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0">
                  <Search classes="hidden md:block" />
                  {role == ROLES.viewer &&
                    <button className="text-white text-xl background-transparent font-bold px-2 text-xs outline-none focus:outline-none my-1 mx-1 ease-linear transition-all duration-150" type="button"
                      onClick={() => setIsLoginOpen(true)}>
                      Login
                    </button>
                  }
                  {role != ROLES.viewer &&
                    <Menu as="div" className="ml-3 relative z-30">
                      <div>
                        <Menu.Button className="flex text-sm focus:outline-none focus:text-grey-300">
                          <span className="sr-only">Open user menu</span>
                          <span className="text-white hover:text-grey-300 focus:text-grey-300">{getUserObject().firstName}</span>
                          <ChevronDownIcon className="h-3 w-3 my-auto ml-2 text-white hover:text-grey-300" aria-hidden="true" />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(active ? '' : '', 'block px-4 py-2 text-sm')}
                              >
                                Your Profile
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(active ? '' : '', 'block px-4 py-2 text-sm')}
                              >
                                Settings
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                onClick={() => {localStorage.removeItem('token'); setRole(ROLES.viewer) }}
                                href="#"
                                className={classNames(active ? '' : '', 'block px-4 py-2 text-sm')}
                              >
                                Sign out
                              </a>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  }
                </div>
              </div>
            </div>
          </>
        )}
      </Disclosure>
    </div>
  )
}
