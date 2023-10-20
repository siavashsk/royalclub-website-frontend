import { Chip, Typography } from "@material-tailwind/react";
import { Fragment } from "react";
import moment from "moment";
import { useMaterialTailwindController } from "context";

const TableItem = ({ className, item }: any) => {
  const [controller]: any = useMaterialTailwindController();
  const { sidenavColor, sidenavType } = controller;

  return (
    <Fragment>
      <td className={className} key={item.id}>
        <div className="text-center">
          <Typography variant="small" color={sidenavType === "dark" ? 'white' : 'blue-gray'} className="font-semibold">
            {item.game}
          </Typography>
        </div>
      </td>
      <td className={className}>
        <Typography className="text-xs font-semibold text-center text-blue-gray-400">
          {item.cost}
        </Typography>
      </td>
      <td className={className}>
        <Typography className="text-xs font-semibold text-center text-blue-gray-400">
          {5}/{item.capacity}
        </Typography>
      </td>
      <td className={className}>
        <div className="text-center">
          <Chip
            variant="gradient"
            color={item.status === "playing" ? "green" : "red"}
            value={item.status === "playing" ? "Playing" : "Finished"}
            className="py-0.5 px-2 text-[11px] font-medium"
          />
        </div>
      </td>
      <td className={className}>
        <div>
          <Typography className="text-xs font-semibold text-center text-blue-gray-400">
            {item.typeOfCost}
          </Typography>
        </div>
      </td>

      <td className={className}>
        <div>
          <Typography className="text-xs font-semibold text-center text-blue-gray-400">
            {moment(item.createdAt?.slice(0, 10), "YYYYMMDD").fromNow()}
          </Typography>
        </div>
      </td>
    </Fragment>
  );
};

export default TableItem;
