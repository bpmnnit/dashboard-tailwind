import { Fragment } from 'react';
import { HiOutlineBell, HiOutlineChatAlt, HiOutlineSearch } from "react-icons/hi";
import { Popover, Transition, Menu } from "@headlessui/react";
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-white h-16 px-4 flex items-center border-b border-gray-200 justify-between">
      <div className="relative">
        <HiOutlineSearch fontSize={20} className="text-gray-400 absolute top-1/2 -translate-y-1/2 left-3"/>
        <input type="text" placeholder="Search..." className="text-sm focus:outline-none active:outline-none h-10 w-[24rem] border border-gray-300 rounded-sm pl-11 pr-4"/>
      </div>
      <div className="flex items-center gap-2 mr-2">
        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button
                className={classNames(
                  open && 'bg-gray-100', "p-1.5 rounded-sm inline-flex items-center text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100"
                )}
              >
                <HiOutlineChatAlt fontSize={24} />
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Popover.Panel className="absolute right-0 z-10 mt-2.5 w-80">
                  <div className='bg-white rounded-sm shadow-md ring-black ring-opacity-5 px-2 py-2.5'>
                    <strong className='text-gray-700 font-medium'>Messages</strong>
                    <div className='mt-2 py-1 text-sm'>
                      This is the messsges panel!
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>    
          )}
        </Popover>
        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button
                className={classNames(
                  open && 'bg-gray-100', "p-1.5 rounded-sm inline-flex items-center text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100"
                )}
              >
                <HiOutlineBell fontSize={24} />
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Popover.Panel className="absolute right-0 z-10 mt-2.5 w-80">
                  <div className='bg-white rounded-sm shadow-md ring-black ring-opacity-5 px-2 py-2.5'>
                    <strong className='text-gray-700 font-medium'>Notifications</strong>
                    <div className='mt-2 py-1 text-sm'>
                      This is the notifications panel!
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>    
          )}
        </Popover>
        <Menu as="div" className="relative">
          <div className='inline-flex'>
            <Menu.Button className="ml-2 flex inline-flex rounded-full focus:outline-none focus:ring-2 focus:ring-neutral-400">
              <span className='sr-only'>Open User Menu</span>
              <div className='h-10 w-10 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-position-center' style={{backgroundImage: 'url("https://source.unsplash.com/80x80?face")'}}>
                <span className='sr-only'>Bhanu Singh</span>
              </div>
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
            <Menu.Items className="origin-top-right z-10 absolute right-0 mt-2 w-48 rounded-sm showdow-md p-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <Menu.Item>
                {({ active }) => (
                  <div className={classNames(
                    active && 'bg-gray-100',
                    'text-gray-700 focus:bg-gray-200 curosr-pointer rounded-sm px-4 py-2'
                  )}
                    onClick={() => navigate('/profile')}>
                    Your Profile
                  </div>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <div className={classNames(
                    active && 'bg-gray-100',
                    'text-gray-700 focus:bg-gray-200 curosr-pointer rounded-sm px-4 py-2'
                  )}
                    onClick={() => navigate('/settings')}>
                    
                    Settings
                  </div>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <div className={classNames(
                    active && 'bg-gray-100',
                    'text-gray-700 focus:bg-gray-200 curosr-pointer rounded-sm px-4 py-2'
                  )}
                    onClick={() => navigate('/logout')}>
                    Logout
                  </div>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu> 
      </div>
    </div>
  );
};

export default Header;