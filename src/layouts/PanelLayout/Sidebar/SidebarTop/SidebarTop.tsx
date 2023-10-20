import { Typography, IconButton, Avatar } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { MdOutlineClose } from "react-icons/md";
import { useMaterialTailwindController, setOpenSidenav } from "../../../../context";

const SidebarTop = () => {
  const [controller, dispatch]: any = useMaterialTailwindController();
  const { sidenavType } = controller;

  return (
    <div className={`relative border-b${sidenavType === "dark" ? "border-white/20" : "border-blue-gray-50"}`}>
      <Link to="/" className="flex items-center gap-4 py-6 px-8">
        <Avatar src="/images/logo.png" size="md" className="rounded-full" />
        <Typography variant="h6" color={sidenavType === "dark" ? "white" : "blue-gray"}>
          Royal Club
        </Typography>
      </Link>
      <IconButton variant="text" color="white" size="sm" ripple={false}
        className="absolute right-0 top-0 grid rounded-br-none rounded-tl-none xl:hidden"
        onClick={() => setOpenSidenav(dispatch, false)}>
        <MdOutlineClose className="h-5 w-5 text-white" />
      </IconButton>
    </div>
  );
};

export default SidebarTop;
