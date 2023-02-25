import MainNavigation from "./MainNavigation";

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex font-roboto text-white">
      <MainNavigation />
      <main className="md:ml-[300px] py-4 px-4 md:px-7">{children}</main>
    </div>
  );
};

export default MainLayout;
