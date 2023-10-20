import { Button, Typography } from "@material-tailwind/react";
import { useMaterialTailwindController } from "context";
import { NavLink } from "react-router-dom";

interface Props {
  icon: any;
  name: string;
  path: string;
}

const ItemMenu = ({ icon, name, path }: Props) => {
  const [controller]: any = useMaterialTailwindController();
  const { sidenavColor, sidenavType } = controller;

  return (
    <NavLink to={`/${path}`}>
      {({ isActive }) => (
        <Button variant={isActive ? "gradient" : "text"}
          color={isActive ? sidenavColor : sidenavType === "dark" ? "white" : "blue-gray"}
          className="flex items-center gap-4 px-4 capitalize" fullWidth>
          {icon}
          <Typography color="inherit" className="font-medium capitalize">
            {name}
          </Typography>
        </Button>
      )}
    </NavLink>
  );
};

export default ItemMenu;
