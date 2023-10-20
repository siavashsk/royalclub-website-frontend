import { Chip, Typography } from "@material-tailwind/react";
import { Fragment } from "react";
import moment from "moment";

const TournamentLogItem = ({ game, play, capacity, cost, type, status, updatedAt }: any) => {
  const formatedDate = moment(updatedAt?.slice(0, 10), "YYYYMMDD").fromNow();

  return (
    <Fragment>
      <td className="py-6">
        <Typography className="text-sm font-semibold text-center text-gray-800">
          {game}
        </Typography>
      </td>
      <td>
        <Typography className="text-sm font-semibold text-center text-gray-800">
          {play ? <p className="text-green-500">Played</p> : <p className="text-red-500">Not Played</p>}
        </Typography>
      </td>
      <td>
        <Typography className="text-sm font-semibold text-center text-gray-800">
          {capacity}
        </Typography>
      </td>
      <td>
        <Typography className="text-sm font-semibold text-center text-gray-800">
          {cost}
        </Typography>
      </td>
      <td>
        <Typography className="text-sm font-semibold text-center text-gray-800">
          {type}
        </Typography>
      </td>
      <td>
        <Typography className="text-sm font-semibold text-center text-gray-800">
          <Chip variant="gradient" color={status === "finish" ? "red" : (status === "model" ? "blue" : 'green')}
            value={status === "finish" ? "Finish" : (status === "model" ? "Model" : 'Start Playing')}
            className="py-0.5 px-2 text-[11px] font-medium " />
        </Typography>
      </td>
      <td>
        <Typography className="text-sm font-semibold text-center text-gray-800">
          {formatedDate}
        </Typography>
      </td>
    </Fragment>
  );
};

export default TournamentLogItem