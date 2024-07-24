'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import { IconSearch } from '@tabler/icons-react'
import ExampleCart from '@/app/home/cart/components/cart222'
import { useCategoryMenu } from '@/hooks/useCategorys'

const products = [
  { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#'},
  { name: 'Engagement', description: 'Speak directly to your customers', href: '#' },
  { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#' },
  { name: 'Integrations', description: 'Connect with third-party tools', href: '#' },
  { name : 'Otros' , description: 'Explora todas las categorias' , href: '#'}
]


export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const {categorys, isLoading, isError} = useCategoryMenu('category')

  return (
    <header className="navbar">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img alt="" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" className="h-8 w-auto" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <PopoverGroup
          className="hidden lg:flex lg:gap-x-12 " >
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 pt-4">
              Category
              <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
            </PopoverButton>
            <PopoverPanel
              transition
              className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-4">
                {products.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                  >
                    
                    <div className="flex-auto">
                      <a href={item.href} className="block font-semibold text-gray-900">
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>
          <form className="w-full max-w-sm ">
            <div className="flex items-center border-b border-green-600 py-2">
              <input className="appearance-none bg-transparent border-none w-full text-gray-900  px-2 leading-tight focus:outline-none" type="text" placeholder="Search" aria-label="Full name" />
              <button className="flex-shrink-0 btn-primary text-sm text-white py-1 px-2 rounded" type="button">
                <IconSearch className='text-slate-800' stroke={2} />
              </button>
              <button className="flex-shrink-0 border-transparent border-4 text-green-600 hover:text-green-700 text-sm py-1 px-2 rounded" type="button">
                Cancel
              </button>
            </div>
          </form>
          <a href={'/home/products'} className="text-sm font-semibold leading-6 text-gray-900 pt-4">
            Products
          </a>
          <a href={'/home/cart'}
          className="text-sm font-semibold leading-6 text-gray-900 pt-4">
            Cart
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900 pt-4">
            Helps
          </a>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href={'/auth/login'} className="text-sm font-semibold leading-6 text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <form className="w-full max-w-sm ">
                  <div className="flex items-center border-b border-green-600 py-2">
                    <input className="appearance-none bg-transparent border-none w-full text-gray-900  px-2 leading-tight focus:outline-none" type="text" placeholder="Search" aria-label="Full name" />
                    <button className="flex-shrink-0 btn-primary text-sm text-white py-1 px-2 rounded" type="button">
                      <IconSearch className='text-slate-800' stroke={2} />
                    </button>
                    <button className="flex-shrink-0 border-transparent border-4 text-green-600 hover:text-green-700 text-sm py-1 px-2 rounded" type="button">
                      Cancel
                    </button>
                  </div>
                </form>
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Product
                    <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...products].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Marketplace
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Company
                </a>
              </div>
              <div className="py-6">
                <a
                  href={'/auth/login'}
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in movil
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
