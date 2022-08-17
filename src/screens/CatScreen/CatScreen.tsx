import React from "react";

// Components
import { KittyWindow } from "../../features/kitty";
import Page from "../../features/layout";

export const CatScreen: React.FC = () => {
  return (
    <Page>
      <KittyWindow />
    </Page>
  );
};
