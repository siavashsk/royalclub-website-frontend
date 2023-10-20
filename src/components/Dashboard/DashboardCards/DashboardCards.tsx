import { GiFireGem, GiTwoCoins } from "react-icons/gi";
import { FaUsers, FaGem } from "react-icons/fa";
import StatisticsCard from "components/UI/StatisticsCard";

const DashboardCards = ({ data, isLoading }: any) => {
  return (
    <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
      <StatisticsCard
        isLoading={isLoading}
        color={"cyan"}
        icon={<FaUsers size={30} />}
        title="Online Players"
        value={data?.online_users}
        data={data}
      />
      <StatisticsCard
        isLoading={isLoading}
        color="teal"
        icon={<FaGem size={30} />}
        title="All Gems"
        value={data?.all_gems}
        data={data}
      />
      <StatisticsCard
        isLoading={isLoading}
        color="green"
        icon={<GiFireGem size={30} />}
        title="Cash Gems"
        value={data?.cash_gems}
        data={data}
      />
      <StatisticsCard
        isLoading={isLoading}
        color="amber"
        icon={<GiTwoCoins size={30} />}
        title="Coins"
        value={data?.coins}
        data={data}
      />
    </div>
  );
};

export default DashboardCards;
