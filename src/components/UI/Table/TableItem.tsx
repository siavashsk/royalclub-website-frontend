import { Typography } from "@material-tailwind/react";
import { Fragment } from "react";
import { VscClose } from "react-icons/vsc";
import { FcCheckmark } from "react-icons/fc";
import moment from "moment";

const TableItem = ({ userId, type, typeId, game, capacity, createdAt, gem, rclGem, received }: any) => {
  const formatedDate = moment(createdAt?.slice(0, 10), "YYYYMMDD").fromNow();

  return (
    <Fragment>
      <td className="py-6">
        <Typography className="text-sm font-semibold text-center text-gray-800">
          {userId}
        </Typography>
      </td>
      <td>
        <Typography className="text-sm font-semibold text-center text-gray-800">
          {type}
        </Typography>
      </td>
      <td>
        <Typography className="text-sm font-semibold text-center text-gray-800">
          {typeId}
        </Typography>
      </td>
      <td>
        <Typography className="text-sm font-semibold text-center text-gray-800">
          {game}
        </Typography>
      </td>
      <td>
        <Typography className="text-sm font-semibold text-center text-gray-800">
          {capacity}
        </Typography>
      </td>
      <td>
        <Typography className="text-sm font-semibold text-center text-gray-800">
          {formatedDate}
        </Typography>
      </td>
      <td>
        <Typography className="text-sm font-semibold text-center text-gray-800">
          {gem}
        </Typography>
      </td>
      <td>
        <Typography className="text-sm font-semibold text-center text-gray-800">
          {rclGem}
        </Typography>
      </td>
      <td>
        <Typography className="text-sm font-semibold flex justify-center text-gray-800">
          {received ? (<FcCheckmark size={21} />) : (<VscClose size={25} color="red" />)}
        </Typography>
      </td>
    </Fragment>
  );
};

export default TableItem;
