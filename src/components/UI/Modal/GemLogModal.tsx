import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Typography,
} from "@material-tailwind/react";
import { useMaterialTailwindController } from "context";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { getEndpoint } from "services/api/endpoints";
import FetchLoading from "../Loadings/FetchLoading";
import TableItem from "../Table/TableItem";

const GemLogModal = ({ id, open, size, handleOpen }: any) => {
  const [controller]: any = useMaterialTailwindController();
  const { token } = useSelector((state: any) => state.auth);
  const { sidenavColor } = controller;

  const { data, error, isLoading }: any = useQuery({
    queryKey: ["Products"],
    queryFn: () => fetchGemlogs(),
  });
  //
  async function fetchGemlogs() {
    try {
      const { data } = await getEndpoint(
        `api/admin/gemlogs?user_id=${id}`,
        token
      );
      return data;
    } catch (error) {
      console.log("ERROR: ", error);
    }
  }

  const arr1 = [
    "User_Id",
    "Type",
    "Type_Id",
    "Game",
    "Capacity",
    "Created_At",
    "Gem",
    "RCL_Gem",
    "Received",
  ];

  return (
    <Dialog open={open} size={size} handler={handleOpen}>
      <DialogHeader>Gemlogs</DialogHeader>
      <DialogBody divider className="overflow-y-scroll">
        <div className="h-16 w-full">
          {error && (
            <p className="text-red-600 font-normal">
              Error has occured : {error}
            </p>
          )}
          {/* BODY DATA */}
          <div className="overflow-x-scroll bg-white shadow sm:rounded-lg">
            {isLoading ? <FetchLoading /> : null}
            <table className="w-full table-auto">
              {!isLoading && (
                <thead>
                  <tr>
                    {arr1.map((el) => (
                      <th
                        key={el}
                        className="border-b bg-gray-800 border-blue-gray-50 py-3 px-5 text-left"
                      >
                        <Typography
                          variant="small"
                          className="text-[13px] font-bold uppercase text-center text-white"
                        >
                          {el}
                        </Typography>
                      </th>
                    ))}
                  </tr>
                </thead>
              )}

              <tbody>
                {data?.map((item: any) => (
                  <tr key={item.userId} className="bg-gray-50">
                    <TableItem
                      userId={item.user_id}
                      type={item.type}
                      typeId={item.type_id}
                      game={item.game}
                      capacity={item.capacity}
                      createdAt={item.createdAt}
                      gem={item.gem}
                      rclGem={item.rcl_gem}
                      received={item.recevied}
                    />
                  </tr>
                ))}
              </tbody>
            </table>
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

export default GemLogModal;
