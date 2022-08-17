// Hooks
import { useLayoutEffect, useState } from "react";
import { useAuth } from "../auth";

// Services
import { KittyAPI } from "./kitty.service";

export const useKittyImage = () => {
  const { setIsAuth } = useAuth();
  const [src, setSrc] = useState("");

  useLayoutEffect(() => {
    KittyAPI.getKitty(null)
      .then((res) => res.data)
      .then(({ data: { src } }) => src)
      .then(setSrc)
      .catch(() => {
        setIsAuth(false);
        localStorage.removeItem("KittyIsAuth");
      });
  }, [setIsAuth]);

  return { src };
};
