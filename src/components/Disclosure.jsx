import { Disclosure, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

export function Bundle() {
  return (
    <div className="w-full px-4 pt-6">
      <div className="mx-auto w-full rounded-sm p-2">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between  py-4 px-6 text-lg font-semibold rounded-md dark:text-white bg-zinc-600/20 hover:bg-zinc-600/10">
                <span>What is your refund policy?</span>
                <ChevronDownIcon
                  className={`${
                    open ? 'rotate-180 transform transition' : ''
                  } h-6 w-6 text-sky-500`}
                />
              </Disclosure.Button>
              <Transition
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                >
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-700 dark:text-white">
                If you are unhappy with your purchase for any reason, email us
                within 90 days and well refund you in full, no questions asked.
              </Disclosure.Panel>
            </Transition>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  )
}
