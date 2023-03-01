import { navLinks } from "@/content";
import { useRouter } from "next/router";
import NavLink from "./NavLink";

const Sidebar = () => {
  const { pathname } = useRouter();

  return (
    <nav className="fixed top-0 left-0 h-full w-[300px] hidden lg:flex md:flex-col py-10 px-8 bg-layout overflow-y-auto">
      <div className="font-bold font-robotoMono mb-7 ml-4">
        <h1 className=" text-4xl">Teyvat</h1>
        <h3 className="text-2xl text-logo">Chronicles</h3>
      </div>
      <ul>
        {navLinks.map((nav) => (
          <NavLink key={nav.title} nav={nav} pathname={pathname} />
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
