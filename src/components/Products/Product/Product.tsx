import { useState } from "react";
import { Button, Card, Chip } from "@material-tailwind/react";
import { AiOutlineEdit } from "react-icons/ai";
import { useMaterialTailwindController } from "context";
import EditModal from "../EditModal/EditModal";

const Product = ({ item }: any) => {
  const [detailModal, setDetailModal] = useState(false);
  const [controller]: any = useMaterialTailwindController();
  const { sidenavColor } = controller;

  function handleOpen() {
    setDetailModal((prev) => !prev);
  }

  return (
    <Card
      className="w-[250px] h-[210px] shadow-lg mx-2 mb-4 bg-blue-gray-50"
      key={item.id}
    >
      <div className="w-full h-full rounded-t-lg">
        <img
          src={`/images/products/awards/${item.image}.png`}
          alt="product"
          loading="lazy"
        />
      </div>
      <div className="flex justify-between gap-1 mx-4 my-1 font-medium text-blue-gray-400 text-sm">
        <p>Type: {item.type}</p>
        <p>Value: {item.value}</p>
      </div>
      <div className="text-center flex gap-1 m-3">
        <Chip
          color={item.active ? "green" : "red"}
          variant="gradient"
          value={item.active ? "Active" : "DeActive"}
          className="text-[10px]"
        />
        <Button
          className="w-full flex justify-center gap-2"
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
          size="lg"
          handleOpen={handleOpen}
          data={item}
        />
      )}
    </Card>
  );
};

export default Product;
