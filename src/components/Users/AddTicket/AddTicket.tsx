import { Button, Dialog, DialogBody, DialogFooter, DialogHeader, IconButton, Typography } from "@material-tailwind/react";
import { useMaterialTailwindController } from "context";
import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import TicketItem from "./TicketItem/TicketItem";
import { ToastContainer } from "react-toastify";
import { IAddTicket } from "services/types/user";
import { getEndpoint } from "services/api/endpoints";
import { MdDeleteOutline } from "react-icons/md";
import { BiUser } from "react-icons/bi";
import axios from "axios";
import { successMessage } from "services/utils/toastMessages";

const BASE_URL = "https://royalclub.com";

const AddTicket = ({ user, open, size, handleOpen }: IAddTicket) => {
  const [controller]: any = useMaterialTailwindController();
  const { sidenavColor } = controller;
  const { token } = useSelector((state: any) => state.auth);
  const [list, setList] = useState([]);
  const [userTickets, setUserTickets] = useState([]);
  const [count, setCount] = useState<number>(0);

  async function fetchTickets() {
    getEndpoint(`/api/admin/awardsproducts?blitType=$ne,`, token).then(
      ({ data }) => setList(data)
    );
  }

  async function fetchUserTickets() {
    getEndpoint(`/api/admin/users?_id=${user.id}`, token).then(({ data }) =>
      setUserTickets(data[0].items.tickets)
    );
  }

  async function deleteTicket(ticketId: string, user: any) {
    var options = {
      method: "delete",
      url: `${BASE_URL}/delete-api/admin/user-ticket`,
      headers: { token: token },
      data: { ticket_id: ticketId, user_id: user.id },
    };

    try {
      axios.request(options).then(({ status }) => {
        console.log(status);
        if (status === 200) {
          successMessage("Ticket Removed");
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  const arr1 = ["Capacity", "Cost", "Cost Type", "Game Type", "Expired In", ""];

  useEffect(() => {
    fetchTickets();
    fetchUserTickets();
  }, []);

  useMemo(() => {
    fetchUserTickets();
  }, []);
  useMemo(() => {
    fetchUserTickets();
  }, [count]);

  const deleteTicketHandler = (ticketId: any, user: any) => {
    deleteTicket(ticketId, user);
    setCount((prev: number) => prev + 1);
  };

  return (
    <Dialog open={open} size={size} handler={handleOpen}>
      <ToastContainer />
      <DialogHeader className="flex gap-2">
        <BiUser size={25} />{user.username}
      </DialogHeader>
      <DialogBody divider className="overflow-y-scroll">
        <div className="h-16 w-full">
          {/* BODY DATA */}
          <Typography variant="h4" className="text-blue-gray-800 mb-4">
            Available Tickets
          </Typography>
          <div className="overflow-x-scroll bg-white shadow sm:rounded-lg">
            <table className="w-full table-auto">
              <thead>
                <tr>
                  {["Capacity", "Cost", "Cost Type", "Game Type", ""].map(
                    (el) => (
                      <th key={el}
                        className="border-b bg-gray-800 border-blue-gray-50 py-3 px-5 text-left"
                      >
                        <Typography variant="small" className="text-[13px] font-bold uppercase text-center text-white">
                          {el}
                        </Typography>
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {list.map((item: any) => (
                  <TicketItem user={user} ticketId={item.id} name={item.name} value={item.value}
                    blitType={item.blit_type} blitCapacity={item.blit_capacity} setCount={setCount} />
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-10">
            <Typography variant="h4" className="text-blue-gray-800 mb-4">
              User Tickets
            </Typography>

            <div className="overflow-x-scroll bg-white shadow sm:rounded-lg">
              <table className="w-full min-w-[640px] table-auto">
                <thead>
                  {arr1.map((el) => (
                    <th key={el} className="border-b bg-gray-800 border-blue-gray-50 py-3 px-5 text-left">
                      <Typography variant="small" className="text-[13px] font-bold uppercase text-center text-white">
                        {el}
                      </Typography>
                    </th>
                  ))}
                </thead>
                <tbody>
                  {userTickets.map((item: any) => (
                    <tr key={user.id} className="border-b-1 border-gray-300">
                      <td className="py-6">
                        <Typography className="text-sm font-semibold text-center text-gray-800">
                          {item.capacity}
                        </Typography>
                      </td>
                      <td>
                        <Typography className="text-sm font-semibold text-center text-gray-800">
                          {item.cost}
                        </Typography>
                      </td>
                      <td>
                        <Typography className="text-sm font-semibold text-center text-gray-800">
                          {item.costType}
                        </Typography>
                      </td>
                      <td>
                        <Typography className="text-sm font-semibold text-center text-gray-800">
                          {item.gameTypeString}
                        </Typography>
                      </td>
                      <td>
                        <Typography className="text-sm font-semibold text-center text-gray-800">
                          {item.expiredIn}
                        </Typography>
                      </td>
                      <td>
                        <IconButton color={sidenavColor} variant="text" onClick={() => deleteTicketHandler(item.id, user)}>
                          <MdDeleteOutline size={25} />
                        </IconButton>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </DialogBody>
      <DialogFooter>
        <Button variant="gradient" color={sidenavColor} onClick={handleOpen}>
          <span>Confirm</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
};
export default AddTicket;