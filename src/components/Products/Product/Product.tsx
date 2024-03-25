import { useState } from "react";
import { Button, Card, CardHeader, Chip } from "@material-tailwind/react";
import { AiOutlineEdit } from "react-icons/ai";
import { useMaterialTailwindController } from "context";
import EditModal from "../EditModal/EditModal";
import { useMediaQuery } from "react-responsive";

const Product = ({ item }: any) => {
  const [detailModal, setDetailModal] = useState(false);
  const [controller]: any = useMaterialTailwindController();
  const { sidenavColor } = controller;
  const isSm = useMediaQuery({ query: "(min-width: 700px)" });

  function handleOpen() {
    setDetailModal((prev) => !prev);
  }

  return (
    <Card
      className="sm:w-[280px] w-[96%] h-full shadow-lg mx-2 bg-blue-gray-50"
      key={item.id}
    >
      <CardHeader className="relative h-54">
        <img
          src={`/images/products/awards/${item.image}.png`}
          alt="product"
          loading="lazy"
        />
      </CardHeader>
      <div className="flex justify-between gap-1 mx-4 my-1 font-medium text-blue-gray-400 text-sm">
        <p>Type: {item.type}</p>
        <p>Value: {item.value}</p>
      </div>
      <div className="text-center flex justify-between m-3">
        <Chip
          color={item.active ? "green" : "red"}
          variant="gradient"
          value={item.active ? "Active" : "DeActive"}
          className="text-[10px]"
        />
        <Button
          className="min-w-[100px] flex justify-center gap-2"
          color={sidenavColor}
          variant="outlined"
          size="sm"
          onClick={handleOpen}
        >
          <AiOutlineEdit size={15} />
          <p className="text-xs font-normal capitalize">Edit Product</p>
        </Button>
      </div>

      {detailModal && (
        <EditModal
          open={detailModal}
          size={isSm ? "lg" : "xxl"}
          handleOpen={handleOpen}
          data={item}
        />
      )}
    </Card>
  );
};

export default Product;
