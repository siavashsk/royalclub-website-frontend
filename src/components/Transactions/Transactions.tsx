import { Fragment } from "react";
import { Card } from "@material-tailwind/react";
import CardHeader from "components/UI/CardHeader";
import { sidenavTypes, useMaterialTailwindController } from "context";

const Transactions = () => {
  const [controller]: any = useMaterialTailwindController();
  const { sidenavType } = controller;

  return (
    <Fragment>
      <div className="mt-12 mb-8 flex flex-col gap-2">
        <Card className={`${sidenavTypes[sidenavType]}`}>
          <CardHeader title="Transactions" />
        </Card>
      </div>
    </Fragment>
  );
};

export default Transactions;
