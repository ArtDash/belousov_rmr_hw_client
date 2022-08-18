import React, { useState } from "react";
import Styles from "./AuthForm.module.css";

// API
import { AuthAPI } from "../../auth.service";

// Hooks
import { useAuth } from "../../auth.store";
import { useForm } from "react-hook-form";

// Components
import { Button } from "../../../../ui-library/components/Button";
import { Input } from "../../../../ui-library/components/Input";

// Types
import { ErrorValidationMessage } from "../../../error";

// Utils
import { ValidationRegExp } from "../../auth.utils";
import { ValidationErrors } from "../../../error";

const initialInputData = {
  phone: "",
  password: "",
  email: "",
};

export const AuthForm = () => {
  const [authError, setAuthError] = useState(false);
  const { setIsAuth } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { dirtyFields, errors },
  } = useForm({ defaultValues: initialInputData });

  const isActiveButton = Object.keys(dirtyFields).length === 3;
  const activeButtonClassName = isActiveButton ? Styles.authButtonActive : null;

  const handleAuth = handleSubmit(async (inputData) => {
    try {
      console.log(inputData);
      await AuthAPI.authenticate(inputData);
      setIsAuth((state: boolean) => !state);
      localStorage.setItem("KittyIsAuth", "true");
    } catch {
      setAuthError(true);
    }
  });

  return (
    <form className={Styles.forms} onSubmit={handleAuth}>
      <ValidationErrors errors={errors} authError={authError} />
      <Input
        className={Styles.authInput}
        placeholder="Phone"
        type="tel"
        {...register("phone", {
          required: true,
          pattern: {
            value: ValidationRegExp.PHONE,
            message: ErrorValidationMessage.WRONG_PHONE,
          },
        })}
      />
      <Input
        className={Styles.authInput}
        placeholder="Email"
        type="email"
        {...register("email", {
          required: true,
          pattern: {
            value: ValidationRegExp.EMAIL,
            message: ErrorValidationMessage.WRONG_EMAIL,
          },
        })}
      />
      <Input
        className={Styles.authInput}
        placeholder="Password"
        type="password"
        {...register("password", {
          required: true,
          pattern: {
            value: ValidationRegExp.PASSWORD,
            message: ErrorValidationMessage.WRONG_PASSWORD,
          },
        })}
      />

      <Button
        className={`${Styles.authButton} ${activeButtonClassName}`}
        disabled={!isActiveButton}
      >
        Войти
      </Button>
    </form>
  );
};
