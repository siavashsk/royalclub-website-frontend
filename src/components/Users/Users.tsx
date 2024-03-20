import { Card } from "@material-tailwind/react";
import CardHeader from "components/UI/CardHeader";
import { ToastContainer } from "react-toastify";
import { sidenavTypes, useMaterialTailwindController } from "context";

const Users = () => {
  const [controller]: any = useMaterialTailwindController();
  const { sidenavType } = controller;

  return (
    <div className="flex flex-col gap-2 mt-12 mb-8">
      <Card className={`${sidenavTypes[sidenavType]}`}>
        <ToastContainer />
        <CardHeader title="Users" />
      </Card>
    </div>
  );
};
export default Users;
