import React from "react";

interface Props {
  children: React.ReactNode;
}

const SubHeader: React.FC<Props> = ({ children }) => {
  return (
    <h3 className="font-bold text-xl text-gray-100 uppercase">{children}</h3>
  );
};

export default SubHeader;
