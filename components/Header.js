import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  const menus = [
    {
      title: "Homepage",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];
  return (
    <div className="navbar bg-base-100 px-4 xl:px-44">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost xl:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menus.map((menu, index) => (
              <li key={index}>
                <Link
                  className="cursor-pointer hover:text-violet-500"
                  activeClass="underline decoration-4 decoration-violet-500"
                  href={menu.path}
                >
                  {menu.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Link href="/">
          <a className="btn btn-ghost normal-case text-xl">
            Azmi's Alami Dev Test
          </a>
        </Link>
      </div>
      <div className="navbar-end hidden xl:flex">
        <ul className="menu menu-horizontal p-0">
          {menus.map((menu, index) => (
            <li key={index}>
              <Link href={menu.path}>
                <a>{menu.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
