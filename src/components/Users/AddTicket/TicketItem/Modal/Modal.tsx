import { Button, Input } from "@material-tailwind/react";
import { useMaterialTailwindController } from "context";
import { Fragment, useState } from "react";

const Modal = ({ setOpen, ticketId, user }: any) => {
  const [controller]: any = useMaterialTailwindController();
  const { sidenavColor } = controller;
  const [input, setInput] = useState();

  function handleConfirm() {
    setOpen(false);
    console.log(input);
  }

  return (
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
              <Input size="md" color={sidenavColor} id="number" label="Number" value={input}
                onChange={(e: any) => setInput(e.target.value)} />
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <Button variant="text" color={sidenavColor} onClick={() => setOpen(false)} className="mr-1">
                <span>Close</span>
              </Button>
              <Button variant="gradient" color={sidenavColor} onClick={handleConfirm}>
                <span>Confirm</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </Fragment>
  );
};

export default Modal;