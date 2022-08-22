import React from "react";
import Styles from "./AuthForm.module.css";

// Hooks
import { useForm } from "react-hook-form";

// Components
import { ValidationErrors } from "../../../error";
import { Button } from "../../../../ui-library/components/Button";
import { Input } from "../../../../ui-library/components/Input";

// Types and Entities
import { AuthCredentials } from "../../auth.entity";
import { ErrorValidationMessage } from "../../../error";

// Utils
import { ValidationRegExp } from "../../auth.utils";
import { useLogIn } from "../../auth.hooks";

const initialInputData: AuthCredentials = {
  phone: "",
  password: "",
  email: "",
};

export const AuthForm: React.FC = () => {
  const { logIn, authError } = useLogIn();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: initialInputData, reValidateMode: "onSubmit" });

  const handleAuth = handleSubmit((inputData) => logIn(inputData));

  return (
    <form className={Styles.forms} onSubmit={handleAuth}>
      <ValidationErrors errors={errors} authError={authError} />
      <Input
        className={Styles.authInput}
        placeholder="Phone"
        type="tel"
        {...register("phone", {
          required: ErrorValidationMessage.NO_PHONE,
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
          required: ErrorValidationMessage.NO_EMAIL,
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
          required: ErrorValidationMessage.NO_PASSWORD,
          pattern: {
            value: ValidationRegExp.PASSWORD,
            message: ErrorValidationMessage.WRONG_PASSWORD,
          },
        })}
      />

      <Button className={`${Styles.authButton}`}>Войти</Button>
    </form>
  );
};
