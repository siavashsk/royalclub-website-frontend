import { Fragment, useState } from "react";
import { Card, CardBody, Chip, Typography } from "@material-tailwind/react";
import CardHeader from "components/UI/CardHeader";
import Pagination from "components/UI/Pagination";
import moment from "moment";
import { sidenavTypes, useMaterialTailwindController } from "context";
import { transactionsData } from "services/data/data";

const Transactions = () => {
  const [controller]: any = useMaterialTailwindController();
  const { sidenavType } = controller;

  // pagination logic
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [productPerPage, setProductPerPage] = useState<number>(15);
  const indexOfLastProduct: number = currentPage * productPerPage;
  const indexOfFirstProduct: number = indexOfLastProduct - productPerPage;

  const [totalItems, setTotalItems] = useState(3);


  return (
    <Fragment>

      <div className="mt-12 mb-8 flex flex-col gap-2">
        <Card className={`${sidenavTypes[sidenavType]}`}>
          <CardHeader title="Transactions" />
          {/* {isLoading ? <FetchLoading /> : null} */}
          <CardBody className="overflow-x-scroll md:overflow-x-hidden">
            <table className="w-full min-w-[640px] table-auto">

              <thead>
                <tr>
                  {["user", "product type", "description", "status", "amount", "created at"].map((el) => (
                    <th key={el} className="border-b border-blue-gray-50 py-3 px-5 text-center">
                      <Typography variant="small" className="text-[11px] ml-3 font-bold uppercase text-blue-gray-400">
                        {el}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>


              <tbody>
                {transactionsData.map((item: any, key: any) => {
                  const className = `py-3 px-5 border-b border-blue-gray-50`;
                  return (
                    <tr key={key}>
                      <td className={className}>
                        <div className="flex items-center ml-4 gap-4">
                          <div>
                            <Typography variant="small" color={sidenavType === "dark" ? 'white' : 'blue-gray'} className="font-semibold">
                              {item.user_id}
                            </Typography>
                            <Typography className="text-xs font-normal text-blue-gray-400">
                              {item.phone}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-400 text-center">
                          {item.type}
                        </Typography>
                      </td>
                      <td className={className}>
                        <div className="text-center">
                          <Typography className="text-[12px] font-medium text-blue-gray-400">
                            {item.desc}
                          </Typography>
                        </div>
                      </td>
                      <td className={className}>
                        <div className="text-center">
                          <Chip variant="gradient" color={item.status === "ok" ? "green" : "blue"}
                            value={item.status === "ok" ? "Approved" : "Pending"}
                            className="py-0.5 px-2 text-[11px] font-medium " />
                        </div>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-400 text-center">
                          {item.amount}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-400 text-center">
                          {moment(item.createdAt?.slice(0, 10), "YYYYMMDD").fromNow()}
                        </Typography>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </CardBody>
        </Card>

        <Pagination itemsPerPage={productPerPage} totalItems={totalItems} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>
    </Fragment>
  );
};

export default Transactions;
