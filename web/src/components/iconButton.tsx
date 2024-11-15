import React from "react";

const IconButton = ({
  icon,
  text,
  containerStyle,
  handleClick,
}: {
  icon?: React.ReactNode;
  text: string;
  containerStyle?: string;
  handleClick?: () => void;
}) => {
  return (
    <button
      className={`flex-1 outline-none ${containerStyle}`}
      onClick={handleClick}
    >
      {icon && icon}
      <p className="text-sm font-bold whitespace-nowrap">{text}</p>
    </button>
  );
};

export default IconButton;
