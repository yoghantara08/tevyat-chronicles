import React from "react";

interface Props {
  children: React.ReactNode;
}

const MainHeader: React.FC<Props> = ({ children }) => {
  return <h2 className="font-bold text-4xl drop-shadow mb-2">{children}</h2>;
};

export default MainHeader;
