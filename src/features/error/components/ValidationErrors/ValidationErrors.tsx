import React from "react";
import Styles from "./ValidationErrors.module.css";
import { FieldErrorsImpl } from "react-hook-form";
import { ErrorMessage } from "../ErrorMessage";
import { ErrorValidationMessage } from "../../error.type";

type Props = {
  errors: FieldErrorsImpl<{
    phone: string;
    password: string;
    email: string;
  }>;
  authError: boolean;
};

export const ValidationErrors: React.FC<Props> = ({ errors, authError }) => {
  return (
    <div className={Styles.wrapper}>
      {authError && (
        <ErrorMessage message={ErrorValidationMessage.BAD_REQUEST} />
      )}
      {errors.email?.message !== undefined && (
        <ErrorMessage message={errors.email.message} />
      )}
      {errors.password?.message !== undefined && (
        <ErrorMessage message={errors.password.message} />
      )}
      {errors.phone?.message !== undefined && (
        <ErrorMessage message={errors.phone.message} />
      )}
    </div>
  );
};
