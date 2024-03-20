import { Fragment } from "react";
import { Card } from "@material-tailwind/react";
import CardHeader from "components/UI/CardHeader";
import { sidenavTypes, useMaterialTailwindController } from "context";

const Leagues = () => {
  const [controller]: any = useMaterialTailwindController();
  const { sidenavType } = controller;

  return (
    <Fragment>
      <div className="flex flex-col gap-2 mt-12 mb-8">
        <Card className={`${sidenavTypes[sidenavType]}`}>
          <CardHeader title="Leagues" />
        </Card>
      </div>
    </Fragment>
  );
};
export default Leagues;
