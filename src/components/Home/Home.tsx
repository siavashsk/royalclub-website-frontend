import { Button, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="h-[100vh] bg-gradient-to-br from-teal-300 to-indigo-500">
        <div className="h-full flex items-center justify-center">
          <div className="flex w-[400px] h-[300px] flex-col justify-between items-center text-center">
            <Typography
              variant="h3"
              color="white"
              className="text-md md:text-lg lg:text-3xl transition-all"
            >
              Welcome To Royal Club Website
            </Typography>
            <div style={{display: "flex", flexDirection: "column", gap: "1rem"}}>
              <Link to="/login/admin">
                <Button
                  color="indigo"
                  variant="filled"
                  className="w-[200px] md:w-[250px] text-sm md:text-md font-normal"
                >
                  Login Now
                </Button>
              </Link>
              {/* <Link to="/signup">
                <Button
                  color="indigo"
                  variant="filled"
                  className="w-[200px] md:w-[250px] text-sm md:text-md font-normal"
                >
                  Sign Up
                </Button>
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
