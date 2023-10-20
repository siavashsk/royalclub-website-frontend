import { Typography } from "@material-tailwind/react";
import React from "react";

const Empty = ({ icon }: any) => {
  return (
    <div className="flex flex-col justify-center gap-3 items-center h-[264px] border rounded-sm">
      <Typography variant="h6" className="text-gray-500">Empty Notifications</Typography>
      {icon}
    </div>
  );
};

export default Empty;
