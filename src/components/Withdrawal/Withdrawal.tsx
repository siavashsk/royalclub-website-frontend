import { Card, Typography, CardBody, Chip } from "@material-tailwind/react";
import CardHeader from "components/UI/CardHeader";
import { sidenavTypes, useMaterialTailwindController } from "context";
import { withdrawalData as data } from "services/data/data";

const Withdrawal = () => {
  const [controller]: any = useMaterialTailwindController();
  const { sidenavType } = controller;



  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <Card className={`${sidenavTypes[sidenavType]}`}>
        <CardHeader title="Withdrawal" />
        <CardBody className="overflow-x-scroll md:overflow-x-hidden">
          <table className="w-full min-w-[640px] table-auto">

            <thead>
              <tr>
                {["username", "amount", "status", "date"].map((el) => (
                  <th key={el} className="border-b border-blue-gray-50 py-3 px-5 text-center">
                    <Typography variant="small" className="text-[11px] ml-3 font-bold uppercase text-blue-gray-400">
                      {el}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>


            <tbody>
              {data.map((item: any, key: any) => {
                const className = `py-3 px-5 border-b border-blue-gray-50`;
                return (
                  <tr key={key}>
                    <td className={className}>
                      <div className="flex items-center ml-4 gap-4">
                        <div>
                          <Typography variant="small" color={sidenavType === "dark" ? 'white' : 'blue-gray'} className="font-semibold">
                            {item.user_id}
                          </Typography>
                          <Typography className="text-xs font-normal text-blue-gray-400">
                            {item.phone}
                          </Typography>
                        </div>
                      </div>
                    </td>

                    <td className={className}>
                      <Typography className="text-xs font-semibold text-blue-gray-400 text-center">
                        {item.amount}
                      </Typography>
                    </td>
                    <td className={className}>
                      <div className="text-center">
                        <Chip variant="gradient" color={item.status === "approved" ? "green" : "red"}
                          value={item.status === "approved" ? "Approved" : "Declined"}
                          className="py-0.5 px-2 text-[11px] font-medium " />
                      </div>
                    </td>
                    <td className={className}>
                      <Typography className="text-xs font-semibold text-blue-gray-400 text-center">
                        {item.createdAt}
                      </Typography>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </CardBody>
      </Card>
    </div>
  );
};

export default Withdrawal;
