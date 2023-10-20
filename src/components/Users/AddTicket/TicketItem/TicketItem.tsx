import { Button, Input, Typography } from "@material-tailwind/react";
import axios from "axios";
import { useMaterialTailwindController } from "context";
import { Fragment, useState } from "react";
import { MdOutlinePostAdd } from "react-icons/md";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { ITicketItem } from "services/types/user";
import {
  errorMessage,
  successMessage,
} from "services/utils/toastMessages";

const BASE_URL = "https://testroyalballapi.diacostudios.com";

const TicketItem = ({
  user,
  ticketId,
  name,
  value,
  blitType,
  blitCapacity,
  setCount,
}: ITicketItem) => {
  const [open, setOpen] = useState<any>(false);
  const [controller]: any = useMaterialTailwindController();
  const { sidenavColor } = controller;
  const isSm = useMediaQuery({ query: "(max-width: 700px)" });
  const { token } = useSelector((state: any) => state.auth);
  const [input, setInput] = useState();

  async function addTicket(ticketId: string, user: any) {
    var options = {
      method: "put",
      url: `${BASE_URL}/put-api/admin/user-ticket`,
      data: {
        ticket_id: ticketId,
        user_id: user.id.split(" "),
        expiredIn: input,
      },
      headers: { token: token },
    };
    try {
      axios.request(options).then(({ status }) => {
        if (status === 200) {
          successMessage(`Success, Expiry Time ${input} hours`);
        }
      });
    } catch (error) {
      console.log("ERROR: ", error);
      errorMessage("Request Failed");
    }
  }

  const addTicketHandler = () => {
    addTicket(ticketId, user);
    setCount((prev: number) => prev + 1);
    setOpen(false);
  };

  return (
    <Fragment>
      <tr key={ticketId} className="bg-gray-50 border-b-1 border-gray-300">
        <td className="py-6">
          <Typography className="text-sm font-semibold text-center text-gray-800">
            {name}
          </Typography>
        </td>
        <td>
          <Typography className="text-sm font-semibold text-center text-gray-800">
            {value}
          </Typography>
        </td>
        <td>
          <Typography className="text-sm font-semibold text-center text-gray-800">
            {blitType}
          </Typography>
        </td>
        <td>
          <Typography className="text-sm font-semibold text-center text-gray-800">
            {blitCapacity}
          </Typography>
        </td>
        <td className="text-right px-6">
          <Button
            variant="gradient"
            color={sidenavColor}
            size={isSm ? "sm" : "md"}
            onClick={() => setOpen(true)}
          >
            <div className="flex gap-2">
              <MdOutlinePostAdd size={20} />
              <Typography className="text-sm capitalize">
                {isSm ? "Add" : "Add Ticket"}
              </Typography>
            </div>
          </Button>
          {open ? (
            <Fragment>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                      <h3 className="text-3xl font-semibold text-gray-700">
                        Enter Expiration Number
                      </h3>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto">
                      <Input size="md" color={sidenavColor} id="number" label="Number"
                        value={input} onChange={(e: any) => setInput(e.target.value)} />
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                      <Button variant="text" color={sidenavColor} onClick={() => setOpen(false)} className="mr-1">
                        <span>Close</span>
                      </Button>
                      <Button variant="gradient" color={sidenavColor} onClick={addTicketHandler}>
                        <span>Confirm</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </Fragment>
          ) : null}
        </td>
      </tr>
    </Fragment>
  );
};

export default TicketItem;