import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  Avatar,
  Progress,
} from "@material-tailwind/react";
import { BsCheck } from "react-icons/bs";
import { projectsTableData } from "services/data/data";

const DashboardProjects = () => {
  return (
    <Card className="overflow-hidden xl:col-span-2">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 flex items-center justify-between p-6"
      >
        <div>
          <Typography variant="h6" color="blue-gray" className="mb-1">
            Projects
          </Typography>
          <Typography
            variant="small"
            className="flex items-center gap-1 font-normal text-blue-gray-400"
          >
            <BsCheck size={15} className="h-4 w-4 text-indigo-500" />
            <strong>2 done</strong> this month
          </Typography>
        </div>
      </CardHeader>
      <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
        <table className="w-full min-w-[640px] table-auto">
          <thead>
            <tr>
              {["companies", "Transaction", "completion"].map((el) => (
                <th
                  key={el}
                  className="border-b border-blue-gray-50 py-3 px-6 text-left"
                >
                  <Typography
                    variant="small"
                    className="text-[11px] font-medium uppercase text-blue-gray-400"
                  >
                    {el}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {projectsTableData.map(({ img, name, budget, completion }, key) => {
              const className = `py-3 px-5 ${
                key === projectsTableData.length - 1
                  ? ""
                  : "border-b border-blue-gray-50"
              }`;

              return (
                <tr key={name}>
                  <td className={className}>
                    <div className="flex items-center gap-4">
                      <Avatar src={img} alt={name} size="sm" />
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-bold"
                      >
                        {name}
                      </Typography>
                    </div>
                  </td>
                  <td className={className}>
                    <Typography
                      variant="small"
                      className="text-xs font-medium text-blue-gray-400"
                    >
                      {budget}
                    </Typography>
                  </td>
                  <td className={className}>
                    <div className="w-10/12">
                      <Typography
                        variant="small"
                        className="mb-1 block text-xs font-medium text-blue-gray-400"
                      >
                        {completion}%
                      </Typography>
                      <Progress
                        value={completion}
                        variant="gradient"
                        color={completion === 100 ? "green" : "indigo"}
                        className="h-1"
                      />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </CardBody>
    </Card>
  );
};

export default DashboardProjects;
