import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { useState } from 'react'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
} from '@heroicons/react/24/outline'

const solutions = [
  { name: 'Creacion de presencia online', description: 'Get a better understanding of your traffic', href: '/service_1', icon: ChartPieIcon },
  { name: 'Renovacion de presencia online', description: 'Speak directly to your customers', href: '/service_2' , icon: CursorArrowRaysIcon },
  { name: 'Contenido para redes sociales', description: "Your customers' data will be safe and secure", href: '/service_3', icon: FingerPrintIcon },
]
const callsToAction = [
  { name: 'Ponerse en contacto', href: '#', icon: PhoneIcon },
  
]



export default function Example() {
  
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Popover className="relative transition">
      <PopoverButton 
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-white focus:outline-none group  "
      >
        <span>Solutions</span>
        <ChevronDownIcon aria-hidden="true" className={`h-5 w-5 ${ isOpen ? 'rotate-180' : ' rotate' } animate-spin-slow transition-transform duration-200`} />
      </PopoverButton>

      <PopoverPanel
          className={` absolute left-1/2 z-10 mt-5 flex w-screen max-w-max  px-4 -translate-x-1/2 transition-all duration-700 ease-in-out`}
        >
          <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white bg-opacity-5 text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
            <div className="p-4">
              {solutions.map((item) => (
                <div key={item.name} className="relative flex gap-x-6 rounded-lg p-4 hover:bg-custom-purple hover:bg-opacity-20">
                  <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg border-[1px]  border-custom-purple group-hover:bg-custom-purple">
                    <item.icon aria-hidden="true" className="h-6 w-6 text-custom-purple group-hover:text-blackwww" />
                  </div>
                  <div>
                    <a href={item.href} className="font-semibold text-custom-purple">
                      {item.name}
                      <span className="absolute inset-0" />
                    </a>
                    <p className="mt-1 font-['inter'] text-white text-xs">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </PopoverPanel>
    </Popover>
  )
}
