import MobileNav from "./MobileNav";
import Sidebar from "./Sidebar";

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col lg:flex-row font-roboto text-white">
      <Sidebar />
      <MobileNav />
      <main className="lg:ml-[300px] py-4 px-4 lg:px-7 w-full">{children}</main>
    </div>
  );
};

export default MainLayout;
