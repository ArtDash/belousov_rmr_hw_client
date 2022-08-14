import React from "react";

type Props = {
  placeholder: string;
  type: string;
};

export const Input: React.FC<Props> = ({ placeholder, type }) => {
  return <input placeholder={placeholder} type={type} />;
};
