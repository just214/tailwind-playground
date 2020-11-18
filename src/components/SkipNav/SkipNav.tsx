// The animations in this component required modifications to the
// "inset" theme and variant properties in the Tailwind config.
// See tailwind.config.js
import React from 'react';

export type SkipNavProps = {
  /**
   * Optionally render children
   */
  children?: React.ReactNode;
  /**
   * Optionally provide additional classNames to be applied to the component
   */
  className?: string;
  /**
   * Optionally provide a style object to be merged with the component styles
   */
  style?: React.CSSProperties;
  /**
   * The id of the content that you care about
   */
  contentId: string;
};

export const SkipNav = ({
  className = '',
  children = 'Skip to Content',
  contentId,
  style = {},
}: SkipNavProps) => {
  const classNames = `bg-blue-200 z-50 absolute inline-block m-4 p-1 rounded-full text-xl -top-18 focus:top-0 transition-all duration-300  ${className}`;
  return (
    <a id="skip-nav" className={classNames} href={`#${contentId}`}>
      {children}
    </a>
  );
};
