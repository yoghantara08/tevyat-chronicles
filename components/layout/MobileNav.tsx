import { useState } from "react";
import { useRouter } from "next/router";

import { Box } from "@mui/material";
import NavLink from "./NavLink";
import { navLinks } from "@/content";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const MobileNav = () => {
  const { pathname } = useRouter();
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="lg:hidden flex justify-between px-5 py-4 bg-layout">
      <Box className="font-bold font-robotoMono">
        <h1 className="text-xl">Teyvat Chronicles</h1>
      </Box>
      <div
        className="cursor-pointer relative z-20"
        onClick={() => setToggle((prev) => !prev)}
      >
        {!toggle ? (
          <MenuIcon fontSize="large" />
        ) : (
          <CloseIcon fontSize="large" />
        )}
      </div>

      {toggle ? (
        <ul className="absolute top-0 right-0 bg-mobileNav w-full h-full space-y-5 px-6 py-20 z-10">
          {navLinks.map((nav) => (
            <NavLink key={nav.title} nav={nav} pathname={pathname} />
          ))}
        </ul>
      ) : (
        ""
      )}
    </nav>
  );
};

export default MobileNav;
