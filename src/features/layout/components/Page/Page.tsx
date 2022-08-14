import React from "react";

// Components
import { Footer } from "../Footer";
import { Header } from "../Header";

type Props = {
  children: React.ReactNode;
};

export const Page: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <main> {children} </main>
      <Footer />
    </>
  );
};
