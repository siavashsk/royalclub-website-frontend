import { Fragment, useState } from "react";
import { Card } from "@material-tailwind/react";
import CardHeader from "components/UI/CardHeader";
import Product from "./Product/Product";
import { useSelector } from "react-redux";
import { getEndpoint } from "services/api/endpoints";
import { useQuery } from "react-query";
import Pagination from "components/UI/Pagination";
import FetchLoading from "components/UI/Loadings/FetchLoading";
import { IFetch } from "services/types/queryFetch";
import { sidenavTypes, useMaterialTailwindController } from "context";
import { specialProductsData } from "services/data/data";

const Products = () => {
  const [controller]: any = useMaterialTailwindController();
  const { sidenavType } = controller;

  const { token } = useSelector((state: any) => state.auth);
  const { data, error, isLoading }: IFetch = useQuery({
    queryKey: ["Products"],
    queryFn: () => fetchProducts(),
  });
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [productPerPage, setProductPerPage] = useState<number>(14);
  const indexOfLastProduct: number = currentPage * productPerPage;
  const indexOfFirstProduct: number = indexOfLastProduct - productPerPage;
  const currentProducts = specialProductsData?.slice(indexOfFirstProduct, indexOfLastProduct);

  const [totalItems, setTotalItems] = useState(3);

  async function fetchProducts() {
    try {
      const { data, page, per_page, total }: any = await getEndpoint(
        "/api/admin/awardsproducts",
        token
      );
      setCurrentPage(page);
      setProductPerPage(per_page);
      setTotalItems(total);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Fragment>
      {error && <p className="text-red-600">Error has occured : {error}</p>}

      <div className="mt-12 mb-8 flex flex-col gap-2">
        <Card className={`${sidenavTypes[sidenavType]} pb-6`}>
          <CardHeader title="Award Products" />
          {isLoading ? <FetchLoading /> : null}
          {!isLoading && <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 1xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 gap-4 mx-auto">
            {currentProducts?.map((item: any) => (
              <Product item={item} />
            ))}
          </div>}
        </Card>
        <Pagination
          itemsPerPage={productPerPage}
          totalItems={totalItems}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </Fragment>
  );
};
export default Products;
