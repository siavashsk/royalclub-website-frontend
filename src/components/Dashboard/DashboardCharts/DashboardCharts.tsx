import StatisticsChart from "components/UI/StatisticsChart";
import chartsConfig from "services/config/ChartsConfig";

const DashboardCharts = ({ data }: any) => {
  return (
    <div className="mb-6 grid grid-cols-1 gap-y-12 gap-x-6 md:grid-cols-1 xl:grid-cols-2">
      <StatisticsChart
        title="Online Chart"
        chart={data}
        color="teal"
      />
      <StatisticsChart
        title="Soccer Record Chart"
        chart={data}
        color="green"
      />
      <StatisticsChart
        title="Billiard Chart"
        chart={data}
        color="blue"
      />
      <StatisticsChart
        title="Withdraw Chart"
        chart={data}
        color="indigo"
      />
    </div>
  );
};
export default DashboardCharts;
