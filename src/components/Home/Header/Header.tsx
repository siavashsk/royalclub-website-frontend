import { Button, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { MdLogin } from "react-icons/md";

const Header = () => {
  return (
    <header className="w-full h-10 flex justify-between px-8 pt-6">
      <ul className="flex gap-8">
        <li>list 1</li>
        <li>list 2</li>
      </ul>
      <div>
        <Typography variant="h3" color="white">
          RoyalClub
        </Typography>
      </div>
      <div>
        <Link to="/login/admin">
          <Button
            color="teal"
            variant="filled"
            className="flex gap-2 items-center text-sm md:text-md font-normal"
          >
            <MdLogin color="white" size={20} />
            <p>Login</p>
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
