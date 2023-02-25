import { navLinks } from "@/content";
import { Box } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import NavIcon from "./NavIcon";

const Sidebar = () => {
  const { pathname } = useRouter();

  return (
    <nav className="fixed top-0 left-0 h-full w-[300px] hidden md:flex md:flex-col py-10 px-8 bg-layout overflow-y-auto">
      <Box className="font-bold font-robotoMono mb-7 ml-4">
        <h1 className=" text-4xl">Teyvat</h1>
        <h3 className="text-2xl text-secondary">Chronicles</h3>
      </Box>
      <ul>
        {navLinks.map((nav) => (
          <li
            key={nav.title}
            className={`${
              pathname === nav.link ? "bg-active" : ""
            } py-2 px-4 mb-3 rounded`}
          >
            <Link
              href={nav.link}
              className="font-semibold text-xl space-x-2 flex items-center hover:opacity-80"
            >
              <NavIcon icon={nav.title} />
              <p>{nav.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
