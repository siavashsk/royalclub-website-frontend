import { Card } from "@material-tailwind/react";
import CardHeader from "components/UI/CardHeader";
import { sidenavTypes, useMaterialTailwindController } from "context";

const Withdrawal = () => {
  const [controller]: any = useMaterialTailwindController();
  const { sidenavType } = controller;

  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <Card className={`${sidenavTypes[sidenavType]}`}>
        <CardHeader title="Withdrawal" />
      </Card>
    </div>
  );
};

export default Withdrawal;
