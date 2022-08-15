import React from "react";
import Styles from "./Button.module.css";

type Props = {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
};

export const Button: React.FC<Props> = ({ children, onClick, className }) => {
  return (
    <button className={`${Styles.button} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};
