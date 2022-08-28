import React, { InputHTMLAttributes } from "react";
import Styles from "./Input.module.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  type: string;
  className?: string;
  value?: string;
}

export const Input = React.forwardRef<HTMLDivElement, InputProps>(
  ({ className, placeholder, type, value, ...props }, ref) => (
    <div ref={ref} className={Styles.borderBlock}>
      <input
        className={`${Styles.input} ${className}`}
        placeholder={placeholder}
        type={type}
        value={value}
        {...props}
      />
    </div>
  )
);

Input.displayName = "Input";
