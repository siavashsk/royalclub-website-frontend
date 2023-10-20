import { Typography } from "@material-tailwind/react";
import { sidenavTypes, useMaterialTailwindController } from "context";
import { GoPrimitiveDot } from "react-icons/go";

interface Props {
  id: number;
  title: string;
  desc: string;
  date: string;
}

const Notification = ({ id, title, desc, date }: Props) => {
  const [controller]: any = useMaterialTailwindController();
  const { sidenavColor, sidenavType } = controller;

  return (
    <div className="group px-3 py-4 bg-blue-gray-50 cursor-pointer border-1 rounded-sm border-gray-400" key={id}>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between ">
          <div className="flex items-center gap-1">
            <GoPrimitiveDot size={20} color="darkred" />
            <Typography
              color={sidenavColor}
              className="font-semibold"
            >
              {title}
            </Typography>
          </div>
          <Typography className="text-xs sm:text-[14px] font-normal text-gray-600 transition-all">{date}</Typography>
        </div>
        <Typography className="sm:text-sm text-[12px] font-light transition-all">{desc}</Typography>
      </div>
    </div>
  );
};

export default Notification;
