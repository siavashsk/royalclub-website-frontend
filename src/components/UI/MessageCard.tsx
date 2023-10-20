import React from "react";
import { Avatar, Typography } from "@material-tailwind/react";
import { IMessageCard } from "services/types/UI/messageCard";

const MessageCard = ({ id, img, name, message, action }: IMessageCard) => {
  return (
    <div className="flex items-center justify-between gap-4" key={id}>
      <div className="flex items-center gap-4">
        <Avatar
          src={img}
          alt={name}
          className="rounded-full shadow-lg shadow-blue-gray-500/25"
        />
        <div>
          <Typography
            variant="small"
            color="blue-gray"
            className="mb-1 font-semibold"
          >
            {name}
          </Typography>
          <Typography className="text-xs font-normal text-blue-gray-400">
            {message}
          </Typography>
        </div>
      </div>
      {action}
    </div>
  );
};

export default MessageCard;
