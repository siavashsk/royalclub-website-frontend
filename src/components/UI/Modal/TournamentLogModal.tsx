import { Button, Dialog, DialogBody, DialogFooter, DialogHeader, Typography } from "@material-tailwind/react";
import { useMaterialTailwindController } from "context";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { getEndpoint } from "services/api/endpoints";
import FetchLoading from "../Loadings/FetchLoading";
import TournamentLogItem from "../Table/TournamentLogItem";

const TournamentLogModal = ({ id, open, size, handleOpen }: any) => {
  const [controller]: any = useMaterialTailwindController();
  const { token } = useSelector((state: any) => state.auth);
  const { data, error, isLoading }: any = useQuery({
    queryKey: ["Products"],
    queryFn: () => fetchTournamentLog(),
  });
  const { sidenavColor } = controller;

  async function fetchTournamentLog() {
    try {
      const { data } = await getEndpoint(`comp-api/admin?user_id=${id}`, token);
      return data;
    } catch (error) {
      console.log("ERROR: ", error);
    }
  }

  const arr1 = ["Game", "Play", "Capacity", "Cost", "Type", "Status", "Updated At"];

  return (
    <Dialog open={open} size={size} handler={handleOpen}>
      <DialogHeader>TournamentLogs</DialogHeader>
      <DialogBody divider className="overflow-y-scroll">
        <div className="h-16 w-full">
          {error && (
            <p className="text-red-600 font-normal">
              Error has occured : {error}
            </p>
          )}
          {/* BODY DATA */}
          {isLoading ? <FetchLoading /> : null}
          <div className="overflow-x-scroll bg-white shadow sm:rounded-lg">
            <table className="w-full table-auto">
              {!isLoading && (
                <thead>
                  <tr>
                    {arr1.map((el) => (
                      <th key={el} className="border-b bg-gray-800 border-blue-gray-50 py-3 px-5 text-left">
                        <Typography variant="small" className="text-[13px] font-bold uppercase text-center text-white">
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
                    <TournamentLogItem game={item.game} play={item.play} capacity={item.capacity} cost={item.cost}
                      type={item.type} status={item.status} updatedAt={item.updatedAt} />
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

export default TournamentLogModal;