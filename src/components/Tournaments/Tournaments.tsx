import { Fragment, useState } from "react";
import { Card } from "@material-tailwind/react";
import CardHeader from "components/UI/CardHeader";

import { sidenavTypes, useMaterialTailwindController } from "context";
import CreateModal from "./CreateModal/CreateModal";
import { ToastContainer } from "react-toastify";

import { useMediaQuery } from "react-responsive";

const Tournaments = () => {
  const [createModal, setCreateModal] = useState(false);

  const isSm = useMediaQuery({ query: "(min-width: 700px)" });
  const [controller]: any = useMaterialTailwindController();
  const { sidenavColor, sidenavType } = controller;

  function handleOpen() {
    setCreateModal((prev) => !prev);
  }

  return (
    <Fragment>
      <div className="mt-12 mb-8 flex flex-col gap-2">
        <Card className={`${sidenavTypes[sidenavType]}`}>
          <ToastContainer />
          <CardHeader title="Tournaments" />

          {createModal && (
            <CreateModal
              open={createModal}
              size={isSm ? "lg" : "xxl"}
              handleOpen={handleOpen}
            />
          )}
        </Card>
      </div>
    </Fragment>
  );
};
export default Tournaments;
