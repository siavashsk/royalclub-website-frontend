import { Button } from "@material-tailwind/react";
import { sidenavTypes, useMaterialTailwindController } from "context";
import { Link } from "react-router-dom";

const NotFound = () => {
  const [controller]: any = useMaterialTailwindController();
  const { sidenavType } = controller;


  return (
    <div className={`h-[100vh] bg-[#F4F5FA] flex items-center ${sidenavTypes[sidenavType]}`}>
      <div className="w-[400px] mx-auto ">
        <div className="text-center pt-16">
          <h1 className="text-6xl font-semibold text-gray-700 mb-4">404</h1>
          <div className="flex justify-center">
            <h2 className="text-lg text-blue-gray-400 font-semibold">
              Page Not Found
            </h2>
            {/* <RiAlertFill size={25} className="ml-2 text-yellow-500" /> */}
          </div>
          <p className="text-blue-gray-400 pt-1 text-xs">
            we couldn't find the page you are looking for
          </p>
          <div>
            <img className="bg-cover py-6 w-[330px] mx-[39%]"
              src="/images/404/pose5.jpg" alt=""/>
          </div>
          <Link to="/">
            <Button variant="gradient" size="lg" color="teal">Back To Home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default NotFound;