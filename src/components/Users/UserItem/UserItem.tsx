import { AiOutlineInfoCircle } from "react-icons/ai";
import { Avatar, Chip, IconButton, Tooltip, Typography } from "@material-tailwind/react";
import { BsGem } from "react-icons/bs";
import { MdOutlinePostAdd } from "react-icons/md";
import { Fragment, useState, lazy } from "react";
import { sidenavTypes, useMaterialTailwindController } from "context";
import { IUserItem } from "services/types/user";
import { TfiCup } from "react-icons/tfi";

const Modal = lazy(() => import("components/UI/Modal/Modal"));
const TournamentLogModal = lazy(
  () => import("components/UI/Modal/TournamentLogModal")
);
const GemLogModal = lazy(() => import("components/UI/Modal/GemLogModal"));
const AddTicket = lazy(() => import("../AddTicket/AddTicket"));

const UserItem = ({ className, item, setForceUpdate }: IUserItem) => {
  const [open, setOpen] = useState<boolean>(false);
  const [openGemLog, setOpenGemLog] = useState<boolean>(false);
  const [openTournamentLog, setOpenTournamentLog] = useState<boolean>(false);
  const [openAddTicket, setOpenAddTicket] = useState<boolean>(false);
  const [controller]: any = useMaterialTailwindController();
  const { sidenavColor, sidenavType } = controller;

  function handleOpen() {
    setOpen((prev: boolean) => !prev);
  }

  function gemLogHandler() {
    setOpenGemLog((prev: boolean) => !prev);
  }
  function OpenAddTicketHandler() {
    setOpenAddTicket((prev: boolean) => !prev);
  }

  function tournmanetLogHandler() {
    setOpenTournamentLog((prev: boolean) => !prev);
  }

  return (
    <Fragment>
      <td className={className} key={item.id}>
        <div className="flex items-center gap-4" onClick={handleOpen}>
          <Avatar src={`/images/avatars/${item.avatar}.png`} alt={item.username} size="sm" className="rounded-full w-10 h-10" />
          <div>
            <Typography variant="small"color={sidenavType === "dark" ? 'white' : 'blue-gray'} className="font-medium">
              {item.username}
            </Typography>
            <Typography className="text-xs font-normal text-blue-gray-400">
              {item.phone}
            </Typography>
          </div>
        </div>
      </td>
      <td width={'2%'} className={className}>
        <Typography className="text-xs font-semibold text-center text-blue-gray-400">
          {item.cup}
        </Typography>
      </td>
      <td className={className}>
        <div className="whitespace-nowrap">
          <Typography className="text-xs font-semibold text-center text-blue-gray-400">
            coin: {item.coin}
          </Typography>
          <Typography className="text-xs font-normal text-center text-blue-gray-400">
            gem: {item.gem}
          </Typography>
        </div>
      </td>
      <td width={'5%'} className={className}>
        <div className="text-center">
          <Chip variant="gradient" color={item.banLeague ? "red" : "blue-gray"}
            value={item.banLeague ? "True" : "False"} className="py-0.5 px-2 text-[11px] font-medium" />
        </div>
      </td>
      <td width={'5%'} className={className}>
        <div className="text-center">
          <Chip variant="gradient" color={item.canWithdraw ? "green" : "red"}
            value={item.canWithdraw ? "Yes" : "No"} className="py-0.5 px-2 text-[11px] font-medium" />
        </div>
      </td>
      <td width={'4%'} className={className}>
        <div className="text-center">
          <Chip variant="gradient" color={item.online ? "green" : "blue-gray"} value={item.online ? "online" : "offline"}
            className="py-0.5 px-2 text-[11px] font-medium" />
        </div>
      </td>
      <td className={className}>
        <div className="flex gap-5 items-center justify-center whitespace-nowrap">
          <div className="flex justify-between">
            <Typography className="text-xs font-semibold text-blue-gray-400">
              level: {item.soccer_level}
            </Typography>
          </div>
          <div className="flex justify-between">
            <Typography className="text-xs font-semibold text-blue-gray-400">
              win: {item.soccer_win}
            </Typography>
          </div>
        </div>
      </td>

      <td className={className}>
        <div className="flex justify-center items-center gap-5">
          <div className="flex justify-between whitespace-nowrap">
            <Typography className="text-xs font-semibold text-blue-gray-400">
              level: {item.billiard_level}
            </Typography>
          </div>
          <div className="flex justify-between">
            <Typography className="text-xs font-semibold text-blue-gray-400">
              win: {item.billiard_win}
            </Typography>
          </div>
        </div>
      </td>

      <td className={`${className} flex justify-center`}>
        <Tooltip color={sidenavColor} content="User Info"
          animate={{ mount: { scale: 1, y: 0 }, unmount: { scale: 0, y: 25 } }}>
          <IconButton color={sidenavColor} variant="text" onClick={handleOpen}>
            <AiOutlineInfoCircle size={22} />
          </IconButton>
        </Tooltip>
        <Tooltip color={sidenavColor} content="Gem Logs"
          animate={{ mount: { scale: 1, y: 0 }, unmount: { scale: 0, y: 25 } }}>
          <IconButton color={sidenavColor} variant="text" onClick={gemLogHandler}>
            <BsGem size={20} />
          </IconButton>
        </Tooltip>
        <Tooltip color={sidenavColor} content="Competition Logs"
          animate={{ mount: { scale: 1, y: 0 }, unmount: { scale: 0, y: 25 } }}
        >
          <IconButton color={sidenavColor} variant="text" onClick={tournmanetLogHandler} >
            <TfiCup size={22} />
          </IconButton>
        </Tooltip>
        <Tooltip color={sidenavColor} content="Add Ticket"
          animate={{ mount: { scale: 1, y: 0 }, unmount: { scale: 0, y: 25 } }}
        >
          <IconButton color={sidenavColor} variant="text" onClick={OpenAddTicketHandler}>
            <MdOutlinePostAdd size={22} />
          </IconButton>
        </Tooltip>
      </td>

      {open && (
        <Modal size={"xxl"} open={open} handleOpen={handleOpen} data={item} setForceUpdate={setForceUpdate} />
      )}
      {openTournamentLog && (
        <TournamentLogModal id={item.id} open={openTournamentLog} size="xxl" handleOpen={tournmanetLogHandler} />
      )}
      {openGemLog && (
        <GemLogModal id={item.id} open={openGemLog} size="xxl" inPage={openGemLog} handleOpen={gemLogHandler} />
      )}
      {openAddTicket && (
        <AddTicket user={item} open={openAddTicket} size="xxl" handleOpen={OpenAddTicketHandler} />
      )}
    </Fragment>
  );
};

export default UserItem;