import { Chip, Typography } from "@material-tailwind/react";
import { useMaterialTailwindController } from "context";
import { Fragment } from "react";


const TableItem = ({ className, item }: any) => {
  const [controller]: any = useMaterialTailwindController();
  const { sidenavType, sidenavColor } = controller;


  return (
    <Fragment>
      <td className={className} key={item.id}>
        <div className="flex items-center gap-4" /*  onClick={handleOpen} */>
          <div>
            <Typography className="text-sm font-medium" color={sidenavType === "dark" ? 'white' : 'blue-gray'}>
              {item.from}
            </Typography>
            <Typography variant="small" className="text-blue-gray-400">
              {item.game}
            </Typography>

          </div>
        </div>
      </td>
      <td className={className}>
        <Typography className="text-xs font-semibold text-center text-blue-gray-400">
          {item.cost}
        </Typography>
      </td>
      <td className={className}>
        <Typography className="text-xs font-semibold text-center text-blue-gray-400">
          {item.members?.length}/{item.capacity}
        </Typography>
      </td>
      <td className={className}>
        <div className="text-center">
          <Chip
            variant="gradient"
            color={item.status === "Playing" ? "green" : "red"}
            value={item.status === "Playing" ? "Playing" : "Finished"}
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
            {item.round}
          </Typography>
        </div>
      </td>
    </Fragment>
  );
};
export default TableItem;