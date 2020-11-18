import { Transition } from '@headlessui/react';
import React, { useState } from 'react';
import useOnclickOutside from 'react-cool-onclickoutside';
import { HamburgerMenuButton } from './HamburgerMenuButton';
import { AvatarButton } from './AvatarButton';
import { NotificationsButton } from './NotificationsButton';
import { navItems } from '../../sample-data';

export type User = {
  name: string;
  profilePicture: string;
} | null;

export type HeaderProps = {
  user: User;
  onLogin: () => void;
  onLogout: () => void;
};

export const Header = ({ user, onLogin, onLogout }: HeaderProps) => {
  const [isUserSettingsOpen, setIsUserSettingsOpen] = useState(false);
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);

  function handleLogout() {
    onLogout();
    setIsUserSettingsOpen(false);
  }

  const ref = useOnclickOutside(() => {
    setIsUserSettingsOpen(false);
  });

  function toggleIsUserSettingsOpen() {
    setIsUserSettingsOpen((o) => !o);
  }

  function toggleisMenuExpanded() {
    setIsMenuExpanded((o) => !o);
  }
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <HamburgerMenuButton
              onClick={toggleisMenuExpanded}
              isExpanded={isMenuExpanded}
            />
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0">
              <img
                className="block lg:hidden h-8 w-auto animate-pulse"
                src="https://tailwindui.com/img/logos/v1/workflow-mark-on-dark.svg"
                alt="Workflow logo"
              />
              <img
                className="hidden lg:block h-8 w-auto"
                src="https://tailwindui.com/img/logos/v1/workflow-logo-on-dark.svg"
                alt="Workflow logo"
              />
            </div>
            <nav className="hidden sm:flex sm:items-center sm:ml-6">
              <ul className="flex">
                {navItems.map(({ label, url }) => {
                  return (
                    <li key={label}>
                      <a
                        href={url}
                        className="px-3 py-2 rounded-md text-sm font-medium leading-5 text-white focus:outline-none hover:bg-gray-700 focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
                      >
                        {label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {user && (
              <>
                <NotificationsButton
                  onClick={() => console.log('Notifications Button Clicked')}
                />

                <AvatarButton
                  onClick={toggleIsUserSettingsOpen}
                  imageUrl={user.profilePicture}
                  isExpanded={isUserSettingsOpen}
                  className="ml-2"
                />
              </>
            )}

            {!user && (
              <button
                className="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
                onClick={onLogin}
              >
                Login
              </button>
            )}

            <Transition
              show={isUserSettingsOpen}
              enter="transition ease-out duration-100 transform"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="transition ease-in duration-75 transform"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <nav
                className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg"
                ref={ref}
              >
                <ul
                  className="py-1 rounded-md bg-white shadow-xs"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu"
                >
                  <li>
                    <a
                      href="/"
                      className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                      role="menuitem"
                    >
                      Your Profile
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                      role="menuitem"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <button
                      className="block w-full text-left px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                      role="menuitem"
                      onClick={handleLogout}
                    >
                      Sign out
                    </button>
                  </li>
                </ul>
              </nav>
            </Transition>
          </div>
        </div>
      </div>

      <Transition
        show={isMenuExpanded}
        enter="transition ease-out duration-100 transform overflow-hidden"
        enterFrom="opacity-0 scale-y-0"
        enterTo="opacity-100 scale-y-100"
        leave="transition ease-in duration-100 transform"
        leaveFrom="opacity-100 scale-y-100"
        leaveTo="opacity-0 scale-y-0"
      >
        <div>
          <div className="px-2 pt-2 pb-3">
            {navItems.map(({ label, url }) => {
              return (
                <a
                  key={label}
                  href={url}
                  className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
                >
                  {label}
                </a>
              );
            })}
          </div>
        </div>
      </Transition>
    </nav>
  );
};
