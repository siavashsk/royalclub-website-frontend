import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { IStatisticsCard } from "services/types/UI/statisticsCard";
import DashboardCardSkeleton from "./Skeleton/DashboardCardSkeleton";
import { sidenavTypes, useMaterialTailwindController } from "context";

const StatisticsCard = ({ isLoading, color, data, icon, title, value }: IStatisticsCard) => {
  const [controller]: any = useMaterialTailwindController();
  const { sidenavType, sidenavColor } = controller;


  return (
    <Card className={sidenavTypes[sidenavType]}>
      <CardHeader
        variant="gradient"
        color={color}
        className="absolute -mt-4 grid h-16 w-16 place-items-center text-white"
      >
        {icon}
      </CardHeader>
      <CardBody className="p-4 text-right">
        {!isLoading && (
          <Typography
            variant="small"
            className="font-normal text-blue-gray-300"
          >
            {title}
          </Typography>
        )}
        {isLoading ? <DashboardCardSkeleton /> : null}
        {data ? (
          <Typography variant="h4" color={sidenavType === "dark" ? 'white' : 'blue-gray'}>
            {value}
          </Typography>
        ) : <Typography variant="h4" color={sidenavType === "dark" ? 'white' : 'blue-gray'}>
          0
        </Typography>}
      </CardBody>
    </Card>
  );
};

export default StatisticsCard;
