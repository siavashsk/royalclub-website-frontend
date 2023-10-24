import { Fragment, useState } from "react";
import { Button, Card, CardBody, Typography } from "@material-tailwind/react";
import CardHeader from "components/UI/CardHeader";
import TableItem from "./TableItem/TableItem";
import Pagination from "components/UI/Pagination";
import { useSelector } from "react-redux";
import { GET, getEndpoint } from "services/api/endpoints";
import { sidenavTypes, useMaterialTailwindController } from "context";
import CreateModal from "./CreateModal/CreateModal";
import { ToastContainer } from "react-toastify";
import { useQuery } from "react-query";
import FetchLoading from "components/UI/Loadings/FetchLoading";
import { IFetch } from "services/types/queryFetch";
import { tournamentsData } from "services/data/data";

const Tournaments = () => {
  const { data, error, isLoading }: IFetch = useQuery({
    queryKey: ["Tournaments"],
    queryFn: () => fetchTournaments(),
  });
  const { token } = useSelector((state: any) => state.auth);
  const [createModal, setCreateModal] = useState(false);

  const [controller]: any = useMaterialTailwindController();
  const { sidenavColor, sidenavType } = controller;

  // pagination logic
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [productPerPage, setProductPerPage] = useState<number>(15);
  const indexOfLastProduct: number = currentPage * productPerPage;
  const indexOfFirstProduct: number = indexOfLastProduct - productPerPage;
  const currentProducts = tournamentsData?.slice(indexOfFirstProduct, indexOfLastProduct);

  const [totalItems, setTotalItems] = useState(3);

  const arr1 = ["game", "cost", "capacity", "status", "cost of type", "createdAt"];
  async function fetchTournaments() {
    try {
      const { data }: any = await GET('tournament')
      // const { data, page, per_page, total }: any = await getEndpoint(
      //   "/api/admin/competitionmodels?isLeague=false",
      //   token
      // );
      // setCurrentPage(page);
      // setProductPerPage(per_page);
      // setTotalItems(total);
      console.log(data)
      return data;

    } catch (error) {
      console.log(error);
    }
  }

  function handleOpen() {
    setCreateModal((prev) => !prev);
  }

  return (
    <Fragment>
      {error && <p className="text-red-600">Error has occured : {error}</p>}
      <div className="mt-12 mb-8 flex flex-col gap-2">
        <Card className={`${sidenavTypes[sidenavType]}`}>
          <ToastContainer />
          <CardHeader title="Tournaments" />
          {isLoading ? <FetchLoading /> : null}
          <CardBody className="overflow-x-scroll md:overflow-x-hidden">
            {!isLoading && (
              <div className="flex lg:justify-end sm:justify-center lg:px-5 px-8">
                <div className="pb-4">
                  <Button color={sidenavColor} variant="gradient" onClick={handleOpen}>
                    Create Tournament
                  </Button>
                </div>
              </div>
            )}

            <table className="w-full min-w-[640px] table-auto">
              {!isLoading && (
                <thead>
                  <tr>
                    {arr1.map((el) => (
                      <th key={el} className="border-b border-blue-gray-50 py-3 px-5 text-left">
                        <Typography variant="small" className="text-[11px] font-bold uppercase text-center text-blue-gray-400">
                          {" "}{el}
                        </Typography>
                      </th>
                    ))}
                  </tr>
                </thead>
              )}
              {!isLoading && <tbody>
                {currentProducts?.map((item: any, key: any) => {
                  const className = `py-3 px-5 border-b border-blue-gray-50`;

                  return (
                    <Fragment>
                      <tr key={item.id}>
                        <TableItem className={className} item={item} />
                      </tr>
                    </Fragment>
                  );
                })}
              </tbody>}
            </table>
          </CardBody>
          {createModal && (
            <CreateModal open={createModal} size="lg" handleOpen={handleOpen} />
          )}
        </Card>

        <Pagination itemsPerPage={productPerPage} totalItems={totalItems} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>
    </Fragment>
  );
};
export default Tournaments;
