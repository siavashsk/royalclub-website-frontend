import { Fragment } from "react";
import { ToastContainer } from "react-toastify";
import { getEndpoint } from "services/api/endpoints";
import { useSelector } from "react-redux";
import DashboardCards from "./DashboardCards/DashboardCards";
import DashboardCharts from "./DashboardCharts/DashboardCharts";
import { useQuery } from "react-query";
import FetchLoading from "components/UI/Loadings/FetchLoading";
import { websiteViewsChart } from "services/data/data";

const Dashboard = () => {
  const { token } = useSelector((state: any) => state.auth);
  const { data, error, isLoading }: any = useQuery({
    queryKey: ["OnlineUsers"],
    queryFn: () => fetchCharts(),
  });

  const fetchCharts = async () => {
    try {
      const res = await getEndpoint("/chart-api/admin", token);
      return res;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Fragment>
      {error && <p className="text-red-600">Error has occured : {error}</p>}
      <div className="mt-12">
        <ToastContainer />
        <DashboardCards data={data} isLoading={isLoading} />
        {isLoading && <FetchLoading />}
        {!isLoading ? <DashboardCharts data={websiteViewsChart} /> : null}
      </div>
    </Fragment>
  );
};

export default Dashboard;
