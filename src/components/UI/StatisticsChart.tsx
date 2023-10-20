import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { sidenavTypes, useMaterialTailwindController } from "context";
import Chart from "react-apexcharts";
import { IStatisticsChart } from "services/types/UI/statisticsChart";

const StatisticsChart = ({ color, chart, title }: IStatisticsChart) => {
  const [controller]: any = useMaterialTailwindController();
  const { sidenavType } = controller;

  return (
    <Card className={sidenavTypes[sidenavType]}>
      <CardHeader variant="gradient" color={color}>
        <Chart {...chart} />
      </CardHeader>
      <CardBody>
        <Typography variant="h6" color={sidenavType === "dark" ? 'white' : 'blue-gray'}>
          {title}
        </Typography>
      </CardBody>
    </Card>
  );
};

export default StatisticsChart;
