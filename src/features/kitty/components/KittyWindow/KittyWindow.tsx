import React from "react";
import { useKittyImage } from "../../kitty.hooks";
import Styles from "./KittyWindow.module.css";

export const KittyWindow = () => {
  const { src } = useKittyImage();
  console.log(src);

  return (
    <div className={Styles.wrapper}>
      <h2>Here is your kitty :{")"}</h2>

      <img className={Styles.kittyImage} src={src} alt="kitty" />
    </div>
  );
};
