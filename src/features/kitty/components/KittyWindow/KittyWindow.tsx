import React from "react";
import { useKittyImage } from "../../kitty.hooks";
import Styles from "./KittyWindow.module.css";

export const KittyWindow = () => {
  const { src } = useKittyImage();

  return (
    <div className={Styles.wrapper}>
      <h2>Держи котенка :{")"}</h2>

      <img className={Styles.kittyImage} src={src} alt="kitty" />
    </div>
  );
};
