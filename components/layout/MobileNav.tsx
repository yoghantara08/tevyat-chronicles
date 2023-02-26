import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import { navLinks } from "@/content";
import { mobileNavVariants } from "@/animation/nav-motion";
import NavLink from "./NavLink";
import useWindowSize from "@/hooks/useWindowSize";

const MobileNav = () => {
  const { pathname } = useRouter();
  const [toggle, setToggle] = useState<boolean>(false);
  const { mobile } = useWindowSize();

  // Handle Mobile Nav toggle
  useEffect(() => {
    if (toggle) {
      // Prevent body scrolling when mobile nav appear
      document.body.style.overflow = "hidden";
    }

    // Remove overflow on cleanup
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [toggle]);

  // Make sure the default value of the mobilenav toggle always false when the window size is not mobile
  useEffect(() => {
    if (!mobile) {
      setToggle(false);
    }
  }, [mobile]);

  return (
    <nav className="lg:hidden flex justify-between px-5 py-4 bg-layout">
      <div className="font-bold font-robotoMono">
        <h1 className="text-xl">Teyvat Chronicles</h1>
      </div>

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

      <AnimatePresence mode="wait">
        {toggle && (
          <motion.ul
            className="absolute top-0 right-0 bg-mobileNav w-full h-full space-y-5 px-6 py-16 xs:py-20 z-10 overflow-y-auto"
            variants={mobileNavVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {navLinks.map((nav) => (
              <NavLink
                key={nav.title}
                nav={nav}
                pathname={pathname}
                onClick={() => setToggle((prev) => !prev)}
              />
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default MobileNav;
