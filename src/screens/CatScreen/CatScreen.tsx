import React, { useEffect } from "react";
import Page from "../../features/layout";
import { API } from "../../infrastructure/api.service";

export const CatScreen = () => {
  useEffect(() => {
    const catImageResponce = API.getKitty();
    console.log(catImageResponce);
  }, []);

  return <Page>CatScreen</Page>;
};
