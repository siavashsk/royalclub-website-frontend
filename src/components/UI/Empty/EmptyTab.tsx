import { Typography } from "@material-tailwind/react";

interface Props {
  icon: any;
}

const EmptyTab = ({ icon }: Props) => {
  return (
    <div className="h-[69vh] flex justify-center items-center">
      <div className="flex flex-col items-center gap-6">
        {icon}
        <Typography
          variant="h5"
          className="font-medium text-blue-gray-400 capitalize"
        >
          this tab is empty
        </Typography>
      </div>
    </div>
  );
};

export default EmptyTab;
