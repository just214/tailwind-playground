import React from 'react';

export type AvatarButtonProps = {
  className?: string;
  style?: React.CSSProperties;
  onClick: () => void;
  imageUrl: string;
  isExpanded: boolean;
};

export const AvatarButton = ({
  className = '',
  style = {},
  onClick,
  imageUrl,
  isExpanded,
}: AvatarButtonProps) => {
  const classNames = `flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-white transition duration-150 ease-in-out ${className}`;
  return (
    <button
      className={classNames}
      id="user-menu"
      aria-label="User menu"
      aria-haspopup="true"
      aria-expanded={isExpanded}
      onClick={onClick}
      style={style}
    >
      <img className="h-8 w-8 rounded-full" src={imageUrl} alt="User menu" />
    </button>
  );
};
