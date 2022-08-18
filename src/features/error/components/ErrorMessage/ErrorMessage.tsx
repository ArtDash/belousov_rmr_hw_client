import React from "react";
import Styles from "./ErrorMessage.module.css";

type ErrorMessageProps = {
  message: string;
};

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return <span className={Styles.error}>{message}</span>;
};
