import { Fragment } from 'react'
import { useLocation } from "react-router-dom"
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'


const navigation = [
  { name: 'About',         href: '#/About' },
  { name: 'Services',         href: '#/Services'},
  { name: 'Projects',       href: '#/Projects'},
  { name: 'CONTACT',       href: '#/Contact'}
]

const useCurrentPath = () => {
  const location = useLocation();
  return "#"+location.pathname;
};

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
//current ? 'font-bold text-gray-200' : '',
const DisclosureButton = ({ name, href }) => {
  const currentPath = useCurrentPath();
  const current = currentPath === href;
  return (
    <Disclosure.Button
    key={name}
    as="a"
    href={href}
    className={classNames(
      name == 'CONTACT'? 'font-fraunces font-black px-8 text-[0.8rem] bg-sunnyside_yellow rounded-full text-black hover:text-gray-500' : 'font-barlow text-gray-500 hover:text-black',
      'block px-4 py-4 text-lg'
    )}
    aria-current={current ? 'page' : undefined}
  >
    {name}
  </Disclosure.Button>
  );
};
//current ? ' text-black' : '',#74ccff
const NavigationItem = ({ name, href }) => {
  const currentPath = useCurrentPath();
  const current = currentPath === href;
  
  return (
    <a
    key={name}
    href={href}
    className={classNames(
      name == 'CONTACT'? 'font-fraunces px-6 text-[0.75rem] bg-white rounded-full text-black hover:bg-[#74ccff] hover:text-white' : 'text-white font-medium hover:text-gray-200',
      'px-3 py-2 text-sm'
    )}
    aria-current={current ? 'page' : undefined}
    >
    {name}
  </a>
  );
};

const Navbar = () => {
      return (
    <Disclosure as="nav" className="bg-sunnyside_blue">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl pt-3 px-6 sm:px-6 lg:px-10">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-right justify-center rounded-md p-2 text-white  hover:text-gray focus:outline-none ">
                  <span className="sr-only">Open main menu</span>
                    <Bars3Icon className="block h-8 w-8" aria-hidden="true" />
                </Disclosure.Button>
              </div>
              <div className="flex items-start justify-center sm:items-left sm:justify-start">
                <div className="flex flex-shrink-0 items-start font-outfit font-bold text-white text-3xl">
                    <h2>sunnyside</h2>
                </div>
               
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                
              <div className="hidden sm:ml-6 sm:block sm:left-0">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <NavigationItem key={item.href} name={item.name} href={item.href} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
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
          <Disclosure.Panel className="sm:hidden bg-white flex justify-center text-center mr-5 ml-5 mt-8">
            <div className="mt-10 mb-10 px-4">
              {navigation.map((item) => (
                <DisclosureButton key={item.href} name={item.name} href={item.href} />
              ))}
            </div>
          </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
    )
}

export default Navbar;
