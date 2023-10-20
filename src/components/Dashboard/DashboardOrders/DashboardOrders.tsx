import {
  Typography,
  Card,
  CardHeader,
  CardBody,
} from "@material-tailwind/react";
import { AiOutlineArrowUp } from "react-icons/ai";
import { ordersOverviewData } from "services/data/data";

const DashboardOrders = () => {
  return (
    <Card>
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 p-6"
      >
        <Typography variant="h6" color="blue-gray" className="mb-2">
          Orders Overview
        </Typography>
        <Typography
          variant="small"
          className="flex items-center gap-1 font-normal text-blue-gray-400"
        >
          <AiOutlineArrowUp size={15} className="h-3.5 w-3.5 text-green-500" />
          <strong>24%</strong> this month
        </Typography>
      </CardHeader>
      <CardBody className="pt-0">
        {ordersOverviewData.map(({ icon, color, title, description }, key) => (
          <div key={title} className="flex items-start gap-4 py-3">
            <div
              className={`relative p-1 after:absolute after:-bottom-6 after:left-2/4 after:w-0.5 after:-translate-x-2/4 after:bg-blue-gray-50 after:content-[''] ${
                key === ordersOverviewData.length - 1
                  ? "after:h-0"
                  : "after:h-4/6"
              }`}
            >
              {icon}
            </div>
            <div>
              <Typography
                variant="small"
                color="blue-gray"
                className="block font-medium"
              >
                {title}
              </Typography>
              <Typography
                as="span"
                variant="small"
                className="text-xs font-medium text-blue-gray-400"
              >
                {description}
              </Typography>
            </div>
          </div>
        ))}
      </CardBody>
    </Card>
  );
};

export default DashboardOrders;
