import Spinner from "./Spinner";

const FetchLoading = () => {
  return (
    <div className="flex items-center justify-center w-full h-[74vh]">
      <div className="flex justify-center items-center space-x-1 text-sm text-blue-gray-400">
        <Spinner />
        <p className="text-lg">Loading ...</p>
      </div>
    </div>
  );
};

export default FetchLoading;
