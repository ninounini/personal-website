import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { EnvelopeIcon } from '@heroicons/react/24/outline'

import BTC from '@/images/photos/BTC.png'
import Image from 'next/image'

export function Modal() {
  let [isOpen, setIsOpen] = useState(false)
  let [isLoading, setIsLoading] = useState()
  let [isState, setIsState] = useState()
  
  function boxClick () {
    setIsState({
      bgColor: "red"
    })
  }
  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
    <div className="w-full px-4 pt-16">
      <div className="mx-auto w-full rounded-sm p-2">
        <button
          type="button"
          onClick={openModal}
          className="flex w-full justify-between py-4 px-6 mb-6 text-xl tracking-wide font-semibold rounded-3xl dark:text-gray-200 bg-sky-400 hover:bg-sky-500">
          <span>Subscribe(3 months)</span>
          $19
        </button>
        <button
          type="button"
          onClick={openModal}
          className="flex w-full justify-between py-4 px-6 text-xl tracking-wide font-semibold rounded-3xl dark:text-gray-200 bg-sky-400 hover:bg-sky-500">
          <span>Subscribe(2023-pass)</span>
          $49
        </button>
      </div>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
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
                <Dialog.Panel className="transform overflow-hidden rounded-2xl bg-white p-6 align-middle shadow-xl transition-all">
                  <Image 
                  src={BTC}
                  alt="btc adress"
                  width={300}
                  height={300}
                  className="flex sm:pl-6"
                  />
                  <Dialog.Title
                    as="h3"
                    className="text-lg text-left mt-6 font-medium leading-6 text-gray-900"
                  >
                  Send exact amont in BTC to this adress:
                  </Dialog.Title>
                  <p className="text-sm text-gray-500">
                    3P2muu4GQFWWUFxLrPmz8w3ZryjqxDFBwj
                  </p>
                  <div className="mt-2">
                    <dt>
                      <span className="sr-only">Email</span>
                    </dt>
                    <div>                   
                      <div className="mt-1">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          required
                          placeholder='your email'
                          className="block w-full rounded-md border-warm-gray-300 py-3 px-4 text-warm-gray-900 shadow-sm focus:border-sky-500 focus:ring-sky-500"
                        />
                      </div>
                    <p className="text-sm text-gray-500">
                        Enter your email adress and click on send, then you will receive email confirmation after payment.                   
                    </p>
                    <div className="mt-3" />
                      <button
                      type="submit"
                      className="inline-flex justify-center rounded-md border border-transparent bg-slate-300 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={() => setIsLoading(!isLoading)}                                          
                    >
                      {isLoading && (
                        <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>                        
                      )}
                      Send
                      </button>                    
                    </div>                 
                    </div>                                   
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
