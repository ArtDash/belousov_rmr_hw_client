// Hooks
import { useEffect, useState } from "react";
import { useAuth } from "../auth";

// Services
import { KittyAPI } from "./kitty.service";

export const useKittyImage = (): { src: string } => {
  const { setIsAuth } = useAuth();
  const [src, setSrc] = useState("");

  useEffect(() => {
    void KittyAPI.getKitty(null)
      .then(({ data: { src } }) => src)
      .then(setSrc);
  }, [setIsAuth]);

  return { src };
};
