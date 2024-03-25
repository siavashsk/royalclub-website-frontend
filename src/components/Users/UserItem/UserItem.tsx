import {
  List,
  ListItem,
  ListItemPrefix,
  Avatar,
  Card,
  Typography,
  Menu,
  MenuHandler,
  MenuList,
  Button,
  MenuItem,
} from "@material-tailwind/react";
import { Fragment, useState, lazy } from "react";
import { sidenavTypes, useMaterialTailwindController } from "context";
import { IUserItem } from "services/types/user";
import { MdInfo, MdOutlinePhone } from "react-icons/md";
import { RiCoinFill } from "react-icons/ri";
import { FaGem, FaTicketAlt } from "react-icons/fa";
import { GiTrophyCup } from "react-icons/gi";

const UserItem = () => {
  const [controller]: any = useMaterialTailwindController();
  const { sidenavType } = controller;

  return (
    <Fragment>
      <Card className={`w-full ${sidenavTypes[sidenavType]} `}>
        <ListItem className="sm:flex sm:flex-row flex-col gap-2 justify-between">
          <div className="flex">
            <ListItemPrefix>
              <Avatar
                variant="circular"
                alt="candice"
                src="https://docs.material-tailwind.com/img/face-1.jpg"
              />
            </ListItemPrefix>
            <div>
              <Typography
                variant="h6"
                color={sidenavType === "dark" ? "white" : "blue-gray"}
              >
                Tania Andrew
              </Typography>
              <Typography variant="small" color="gray" className="font-normal">
                Software Engineer
              </Typography>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <MdOutlinePhone color="green" size={25} />
            <Typography variant="small" color="gray" className="font-normal">
              09165548712
            </Typography>
          </div>
          <div className="flex items-center gap-2">
            <RiCoinFill color="yellow" size={25} />
            <Typography variant="small" color="gray" className="font-normal">
              1000
            </Typography>
          </div>
          <div className="flex items-center gap-2">
            <FaGem color="green" size={25} />
            <Typography variant="small" color="gray" className="font-normal">
              250
            </Typography>
          </div>
          <div className="flex items-center gap-2">
            <GiTrophyCup color="yellow" size={25} />
            <Typography variant="small" color="gray" className="font-normal">
              250
            </Typography>
          </div>

          <div className="flex items-center gap-2">
            <Menu>
              <MenuHandler>
                <Button variant="gradient" color="teal">
                  More
                </Button>
              </MenuHandler>
              <MenuList className={`${sidenavTypes[sidenavType]}`}>
                <MenuItem className="flex gap-2 items-center text-gray-500">
                  <MdInfo size={15} />
                  User Info
                </MenuItem>
                <MenuItem className="flex gap-2 items-center text-gray-500">
                  <FaGem size={15} />
                  Gem Logs
                </MenuItem>
                <MenuItem className="flex gap-2 items-center text-gray-500">
                  <FaTicketAlt size={15} />
                  Add Tickets
                </MenuItem>
              </MenuList>
            </Menu>
          </div>
        </ListItem>
      </Card>
    </Fragment>
  );
};

export default UserItem;
