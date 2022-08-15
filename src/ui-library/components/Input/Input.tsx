import React from "react";
import Styles from "./Input.module.css";

type Props = {
  placeholder: string;
  type: string;
  className?: string;
  onChange?: any;
  value?: string;
};

export const Input: React.FC<Props> = ({
  placeholder,
  type,
  className,
  value,
  onChange,
}) => {
  return (
    <div className={Styles.borderBlock}>
      <input
        className={`${Styles.input} ${className}`}
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};
