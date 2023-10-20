const DashboardCardSkeleton = () => {
  return (
    <div role="status" className="mt-2 animate-pulse max-w-lg">
      <div className="flex justify-end items-end flex-col gap-2">
        <div className="h-3 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
        <div className="h-3 bg-gray-300 rounded-full dark:bg-gray-600 w-5"></div>
      </div>
    </div>
  );
};
export default DashboardCardSkeleton;
