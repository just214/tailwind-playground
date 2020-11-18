import React from 'react';

export type FooterProps = {
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
};

export const Footer = ({
  children,
  className = '',
  style = {},
}: FooterProps) => {
  const classNames = `p-4 bg-gray-800 flex items-center justify-center flex-wrap text-white${className}`;
  return (
    <footer className={classNames} style={style}>
      {children || <p>Footer Component</p>}
    </footer>
  );
};
