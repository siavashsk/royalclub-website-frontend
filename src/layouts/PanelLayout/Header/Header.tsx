import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Breadcrumbs,
  Menu,
  MenuHandler,
} from "@material-tailwind/react";
import { AiOutlineBell } from "react-icons/ai";
import { BsGear } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { BiExit } from "react-icons/bi";
import { useLocation, Link } from "react-router-dom";
import {
  useMaterialTailwindController,
  setOpenConfigurator,
  setOpenSidenav,
} from "../../../context";
import { useDispatch } from "react-redux";
import { logout } from "redux/auth/authSlice";

const Header = () => {
  const reduxDispatch = useDispatch();
  const [controller, dispatch]: any = useMaterialTailwindController();
  const { sidenavColor, fixedNavbar, openSidenav, sidenavTypes } = controller;
  const { pathname } = useLocation();
  const [layout, page] = pathname.split("/").filter((el) => el !== "");

  const logoutHandler = () => reduxDispatch(logout());
  const fixNavCondition = fixedNavbar
    ? "sticky top-4 z-40 py-3 shadow-md shadow-indigo-500/5"
    : "px-0 py-1";

  return (
    <Navbar
      color={fixedNavbar ? "white" : "transparent"}
      className={`rounded-xl transition-all ${fixNavCondition}`}
      fullWidth
      blurred={fixedNavbar}
    >
      <div className="flex flex-col-reverse justify-between gap-6 md:flex-row md:items-center">
        <div className="capitalize">
          <Breadcrumbs
            className={`bg-transparent p-0 transition-all ${
              fixedNavbar ? "mt-1" : ""
            }`}
          >
            <Link to={`/${layout}`}>
              <Typography
                variant="small"
                color={sidenavColor}
                className="font-normal opacity-50 transition-all hover:text-indigo-500 hover:opacity-100"
              >
                {layout}
              </Typography>
            </Link>
            <Typography
              variant="small"
              color={sidenavColor}
              className="font-normal"
            >
              {page}
            </Typography>
          </Breadcrumbs>
          <Typography variant="h6" color={sidenavColor}>
            {page}
          </Typography>
        </div>
        <div className="flex items-center">
          <IconButton
            variant="text"
            color={sidenavColor}
            className="grid xl:hidden"
            onClick={() => setOpenSidenav(dispatch, !openSidenav)}
          >
            <FiMenu size={20} strokeWidth={3} className="h-6 w-6" />
          </IconButton>

          <Button
            variant="text"
            color={sidenavColor}
            className="hidden items-center gap-1 px-4 xl:flex"
            onClick={logoutHandler}
          >
            <BiExit size={20} className="h-5 w-5" />
            Log Out
          </Button>

          <IconButton
            variant="text"
            color={sidenavColor}
            className="grid xl:hidden"
            onClick={logoutHandler}
          >
            <BiExit size={20} className="h-5 w-5" />
          </IconButton>
          <IconButton
            variant="text"
            color={sidenavColor}
            onClick={() => setOpenConfigurator(dispatch, true)}
          >
            <BsGear size={20} className="h-5 w-5" />
          </IconButton>
          <Menu>
            <MenuHandler>
              <IconButton variant="text" color={sidenavColor}>
                <AiOutlineBell size={20} className="h-5 w-5" />
              </IconButton>
            </MenuHandler>
          </Menu>
        </div>
      </div>
    </Navbar>
  );
};

export default Header;
