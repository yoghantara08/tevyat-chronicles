import Link from "next/link";
import NavIcon from "./NavIcon";

const NavLink: React.FC<{
  pathname: string;
  nav: { link: string; title: string };
}> = ({ pathname, nav }) => {
  return (
    <li
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
  );
};

export default NavLink;
