import React, { useState, Fragment } from 'react'
import { Transition, Dialog } from '@headlessui/react'
import axios from 'axios';
import { BASE_URL } from 'js/clients/ClientConfig';
import { getUserRole, setSessionToken } from 'js/auth/TokenManager';
import useAPIError from 'js/hooks/useAPIError';
import { setAuthToken } from 'js/clients/AxiosDefaults';

const Login = (props) => {
  const { addError } = useAPIError();
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [authError, setAuthError] = useState()
  const [formDisabled, setFormDisabled] = useState(false)

  const login = (e) => {
    e.preventDefault()
    const loginPayload = {
      username: username,
      password: password
    }
    setFormDisabled(true);
    axios.post(BASE_URL + "/login", loginPayload)
      .then(response => {
        setSessionToken(response.headers.authorization.split(" ")[1]);
        props.setRole(getUserRole());
        props.setIsOpen(false);
        setAuthToken();
        setAuthError();
      })
      .catch(error => {
        if (error.response && (error.response.status === 401 || error.response.status === 403)) {
          setAuthError("Incorrect username or password");
          return;
        }
        addError('Unable to authenticate at this time')
        props.setIsOpen(false);
        setAuthError();
      })
      .finally( () => setFormDisabled(false))
  }

  return (
    <Transition show={props.isOpen} as={Fragment}>
      <Dialog onClose={() => props.setIsOpen(false)}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="justify-center items-center w-full shadow rounded-lg bg-white px-6 flex flex-col md:w-1/2 lg:w-1/3 m-auto">
                <Dialog.Title>
                  <img className="block h-8 w-auto mt-4 mb-1 h-16 w-fill object-cover"
                    alt="Logo"
                    src="/images/logo_transparent.png"
                  />
                </Dialog.Title>
                <div className="w-full p-2 justify-start flex flex-col">
                  <form>
                    <div className="flex flex-row justify-center mb-3">
                      <p className="text-red">{authError}</p>
                    </div>
                    <div className="flex flex-row">
                      <span className="z-highest rounded-l-md w-10 h-9 flex justify-center items-center text-2xl text-gray-400 border border-primary border-r-0" mode="render" block="">
                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 26 26" className="iconify iconify--wpf">
                          <path d="M16.563 15.9c-.159-.052-1.164-.505-.536-2.414h-.009c1.637-1.686 2.888-4.399 2.888-7.07c0-4.107-2.731-6.26-5.905-6.26c-3.176 0-5.892 2.152-5.892 6.26c0 2.682 1.244 5.406 2.891 7.088c.642 1.684-.506 2.309-.746 2.397c-3.324 1.202-7.224 3.393-7.224 5.556v.811c0 2.947 5.714 3.617 11.002 3.617c5.296 0 10.938-.67 10.938-3.617v-.811c0-2.228-3.919-4.402-7.407-5.557z" className="fill-primary">
                          </path>
                        </svg>
                      </span>
                      <input onChange={e => setUsername(e.target.value)} value={username} className="border border-primary rounded-r-md outline-none focus:ring-1 ring-blue-400 w-full pl-2 text-sm" name="" required={false} placeholder="username"/>
                    </div>
                    <div className="my-4 flex flex-row">
                      <span className="z-highest rounded-l-md w-10 h-9 flex justify-center items-center text-2xl text-primary border border-primary border-r-0" mode="render" block="">
                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32" className="iconify iconify--carbon">
                          <path d="M21 2a8.998 8.998 0 0 0-8.612 11.612L2 24v6h6l10.388-10.388A9 9 0 1 0 21 2zm0 16a7.013 7.013 0 0 1-2.032-.302l-1.147-.348l-.847.847l-3.181 3.181L12.414 20L11 21.414l1.379 1.379l-1.586 1.586L9.414 23L8 24.414l1.379 1.379L7.172 28H4v-3.172l9.802-9.802l.848-.847l-.348-1.147A7 7 0 1 1 21 18z" className="fill-primary">
                          </path>
                          <circle cx="22" cy="10" r="2" fill="currentColor">
                          </circle>
                        </svg>
                      </span>
                      <input onChange={e => setPassword(e.target.value)} type="password" value={password} className="h-9 border border-primary rounded-r-md outline-none focus:ring-1 ring-blue-300 w-full pl-2 text-sm" name="" placeholder="password" required={false}/>
                    </div>
                    <button onClick={(e) => login(e)} disabled={formDisabled} value="button" className="px-4 py-2 rounded bg-blue text-white my-4 w-full disabled:bg-grey hover:opacity-90">Login</button>
                  </form>
                </div>

              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default Login
