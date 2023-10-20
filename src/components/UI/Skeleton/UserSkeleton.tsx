const UserSkeleton = () => {
  return (
    <div className="w-full flex justify-start h-15 px-5">
      <div className="flex animate-pulse flex-row items-center w-full h-full justify-start space-x-4 ">
        <div className="w-10 bg-gray-300 h-10 rounded-xl "></div>
        <div className="flex w-full flex-col space-y-1">
          <div className="w-96 bg-gray-300 h-4 rounded-md "></div>
          <div className="w-60  bg-gray-300 h-4 rounded-md "></div>
        </div>
      </div>
    </div>
  );
};

export default UserSkeleton;
