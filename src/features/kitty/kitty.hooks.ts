import { useEffect, useState } from "react";
import { KittyAPI } from "./kitty.service";

export const useKittyImage = () => {
  const [src, setSrc] = useState("");

  useEffect(() => {
    KittyAPI.getKitty(null)
      .then((res) => res.data)
      .then(({ data: { src } }) => src)
      .then(setSrc);
  }, []);

  return { src };
};
