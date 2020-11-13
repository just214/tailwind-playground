import React from 'react';

export type HamburgerMenuButtonProps = {
  className?: string;
  style?: React.CSSProperties;
  isExpanded: boolean;
  onClick: () => void;
};

export const HamburgerMenuButton = ({
  className = '',
  style = {},
  isExpanded,
  onClick,
}: HamburgerMenuButtonProps) => {
  const classNames = ` inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out ${className}`;
  return (
    <button
      aria-label="Main menu"
      aria-expanded={isExpanded}
      style={style}
      onClick={onClick}
      className={classNames}
    >
      <svg
        className="block h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
      <svg
        className="hidden h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  );
};
