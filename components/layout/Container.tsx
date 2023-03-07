const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div
      className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 
      xl:grid-cols-6 2xl:grid-cols-8 gap-5 mt-3"
    >
      {children}
    </div>
  );
};

export default Container;
