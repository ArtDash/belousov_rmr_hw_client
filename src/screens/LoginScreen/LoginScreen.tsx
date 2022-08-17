import React from "react";

// Components
import Page from "../../features/layout";
import { AuthWindow } from "../../features/auth";

export const LoginScreen: React.FC = () => {
  return (
    <Page>
      <AuthWindow />
    </Page>
  );
};
