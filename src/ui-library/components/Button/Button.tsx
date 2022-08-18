import React from "react";
import Styles from "./Button.module.css";

type Props = {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  disabled?: boolean;
};

export const Button: React.FC<Props> = ({
  children,
  onClick,
  className,
  disabled,
}) => {
  return (
    <button
      className={`${Styles.button} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
