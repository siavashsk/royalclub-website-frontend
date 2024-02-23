import {
  Button,
  Dialog,
  DialogFooter,
  DialogHeader,
  Input,
  Switch,
  Typography,
} from "@material-tailwind/react";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { sidenavTypes, useMaterialTailwindController } from "context";
import { useFormik } from "formik";
import { IEdit, IEditModal } from "services/types/product";

const EditModal = ({ open, size, handleOpen, data }: IEditModal) => {
  const [controller]: any = useMaterialTailwindController();
  const { sidenavType, sidenavColor } = controller;

  function onSubmit(values: IEdit) {
    const data = {
      id: values.id, name: values.name, blit_type: values.blit_type,
      type: values.type, value: values.value, active: values.active
    };
    console.log("Data", data);
  }
  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      id: data.id, name: data.name, blit_type: data.blit_type,
      type: data.type, value: data.value, active: data.active
    },
    onSubmit,
  });
  return (
    <Dialog open={open} size={size} handler={handleOpen} key={data.id} className={`${sidenavTypes[sidenavType]}`}>
      <DialogHeader>
        <Typography className="p-2" variant="h4" color={sidenavType === "dark" ? 'white' : 'blue-gray'}>Edit Product</Typography>
      </DialogHeader>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-between flex-col md:flex-row gap-4 mx-6">
          <div className="max-w-[450px] h-[230px] rounded-lg relative">
            <img
              src={`/images/products/awards/avatar4.png`}
              alt="img-blur-shadow" className="h-full w-full object-cover rounded-lg"
            />
            <div
              className="absolute w-11 h-11 border-1 border-white rounded-md flex justify-center items-center cursor-pointer float-right bottom-1 right-1"
              color={sidenavColor} onClick={() => console.log("edit image clicked")}
            >
              <MdOutlineAddPhotoAlternate size={25} color={"white"} />
            </div>
          </div>

          <div className="flex justify-between flex-col gap-2 w-full">
            <div className="flex flex-col xl:flex-row gap-2">
              <Input id="id" value={values.id} label="Id" variant="outlined"
                color={sidenavColor} onChange={handleChange} />
              <Input id="name" value={values.name} label="Name"
                variant="outlined" color={sidenavColor} onChange={handleChange}
              />
            </div>
            <div className="flex flex-col xl:flex-row gap-2">
              <Input id="blit_type" value={values.blit_type} label="Blit Type"
                variant="outlined" color={sidenavColor} onChange={handleChange}
              />
              <Input id="type" value={values.type} label="Type" variant="outlined"
                color={sidenavColor} onChange={handleChange} />
            </div>
            <div className="flex flex-col xl:flex-row gap-6">
              <div className="w-full xl:w-1/2">
                <Input id="value" value={values.value} label="Value"
                  variant="outlined" color={sidenavColor} onChange={handleChange} />
              </div>
              <div className="flex justify-center items-center gap-2">
                <Switch color={sidenavColor} id="active" checked={values.active ? true : false} 
                  value={values.active ? "active" : "deactive"} onChange={handleChange}
                />
                <div className="w-[80px]">
                  <p>{values.active ? "Active" : "DeActive"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <DialogFooter className="mt-4 flex gap-2">
          <Button variant="gradient" color={sidenavColor} type="submit">
            <span>Confirm</span>
          </Button>
          <Button variant="outlined" color={sidenavColor} onClick={handleOpen}>
            <span>Cancel</span>
          </Button>
        </DialogFooter>
      </form>
    </Dialog>
  );
};
export default EditModal;