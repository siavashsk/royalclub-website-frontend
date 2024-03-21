import { useState } from "react";
import { FiLogIn } from "react-icons/fi";
import { close, logo, menu } from "assets";
import { navLinks } from "constants";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="hoobank" className="w-[40px] h-[40px]" />
      <p className="hidden sm:flex text-white text-lg font-semibold ml-4">
        RoyalBall
      </p>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <Link to="/login/admin">
        <Button
          variant="gradient"
          color="teal"
          className="flex items-center gap-2 ml-8"
        >
          <FiLogIn size={20} className="hidden sm:flex" />
          Login
        </Button>
      </Link>
      <div className="sm:hidden flex flex-1 justify-end items-center cursor-pointer">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[160px] rounded-xl sidebar`}
        >
          <ul className="list-none bg-gray-800 rounded-lg flex items-start flex-1 flex-col p-4">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`flex items-center gap-2 font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                {nav.icon}
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
