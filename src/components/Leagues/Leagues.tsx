import { Fragment, useState } from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import CardHeader from "components/UI/CardHeader";
import TableItem from "./TableItem/TableItem";
import Pagination from "components/UI/Pagination";
import { sidenavTypes, useMaterialTailwindController } from "context";
import { leaguesData } from "services/data/data";

const Leagues = () => {
  const [controller]: any = useMaterialTailwindController();
  const { sidenavType } = controller;

  // pagination logic
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [productPerPage, setProductPerPage] = useState<number>(15);
  const indexOfLastProduct: number = currentPage * productPerPage;
  const indexOfFirstProduct: number = indexOfLastProduct - productPerPage;

  const [length, setLength] = useState(3);

  const arr1 = ["game", "cost", "capacity", "status", "cost of type", "round"];



  return (
    <Fragment>

      <div className="flex flex-col gap-2 mt-12 mb-8">
        <Card className={`${sidenavTypes[sidenavType]}`}>
          <CardHeader title="Leagues" />
          <CardBody className="overflow-x-scroll md:overflow-x-hidden">
            <table className="w-full min-w-[640px] table-auto">

              <thead>
                <tr>
                  {arr1.map((el) => (
                    <th
                      key={el}
                      className="px-5 py-3 text-left border-b border-blue-gray-50"
                    >
                      <Typography
                        variant="small"
                        className="text-[11px] font-bold uppercase text-center text-blue-gray-400"
                      >
                        {el}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {leaguesData?.map((item: any) => {
                  const className = `py-3 px-5 border-b border-blue-gray-50`;

                  return (
                    <Fragment>
                      <tr key={item.id}>
                        <TableItem className={className} item={item} />
                      </tr>
                    </Fragment>
                  );
                })}
              </tbody>
            </table>
          </CardBody>
        </Card>

        <Pagination
          itemsPerPage={productPerPage}
          totalItems={length}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </Fragment>
  );
};
export default Leagues;
