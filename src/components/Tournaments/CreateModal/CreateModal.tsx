import {
  Button,
  Dialog,
  DialogFooter,
  DialogHeader,
  Input,
  Radio,
  Typography,
} from "@material-tailwind/react";
import { useMaterialTailwindController } from "context";
import { useFormik } from "formik";
import { ICreateModal } from "services/types/tournaments";
import { postEndpoint } from "services/api/endpoints";
import { useSelector } from "react-redux";
import { errorMessage, successMessage } from "services/utils/toastMessages";
import { tournamentSchema } from "services/utils/formikSchema";
import moment from "moment";

const CreateModal = ({ open, size, handleOpen }: ICreateModal) => {
  const [controller]: any = useMaterialTailwindController();
  const { sidenavColor } = controller;
  const { token } = useSelector((state: any) => state.auth);

  async function onSubmit(values: any) {
    // getting the exact date and time
    const sTime = values.startTime;
    // getting date
    const dateUnix = moment(sTime.split(",")[0]).unix();
    // turning second into millisecond
    const calcDate = dateUnix * 1000;
    // accessing time 
    const t = sTime.split(",")[1];
    // turn time into millisecond
    const millisecTime =
      Number((t.split(":")[0]) * 60 * 60000) + (Number(t.split(":")[1]) * 60000);

    const startTimeValue = calcDate + millisecTime;

    const data = {
      name: values.name,
      desc: values.description,
      game: values.game,
      capacity: values.capacity,
      typeOfCost: values.type,
      cost: values.cost,
      startTime: startTimeValue,
      startAfter: Number(values.startAfter.split(":")[0]) * 60 * 60000 + Number(values.startAfter.split(":")[1]) * 60000,
      active_start: values.active_start,
      active_end: values.active_end
    };
    console.log("Data :", data)
    postEndpoint("api/admin/competitionmodels", token, data).then(
      ({ status }) => {
        if (status === 200) {
          successMessage("New Tounament Added");
          handleOpen();
        } else {
          errorMessage('Error Occured');
        }
      }
    ).catch((error) => console.log(error));
  }
  const { values, errors, handleChange, touched, handleSubmit } = useFormik({
    initialValues: {
      name: "",
      description: "",
      game: { soccer: "soccer", billiard: "billirad" },
      capacity: { min: "4", mid: "8", max: "16" },
      type: { coin: "coin", gem: "gem" },
      cost: "",
      startTime: "",
      startAfter: "",
      active_start: "",
      active_end: "",
    },
    validationSchema: tournamentSchema,
    onSubmit,
  });

  return (
    <Dialog open={open} size={size} handler={handleOpen}>
      <DialogHeader>
        <Typography className="p-2" variant="h4">Create Tournament</Typography>
      </DialogHeader>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-3 mx-6">
          <div className="flex flex-col gap-2 xl:flex-row">
            <div className="w-full">
              <Input id="name" value={values.name} label="Name"
                variant="outlined" color={sidenavColor} onChange={handleChange} />
              {errors?.name && touched?.name && (
                <p className="text-sm text-[#e13535] mt-1">{errors?.name}</p>
              )}
            </div>

            <Input id="description" value={values.description} label="Description"
              variant="outlined" color={sidenavColor} onChange={handleChange} />

            <div className="w-full">
              <Input id="cost" value={values.cost} label="Cost"
                variant="outlined" color={sidenavColor} onChange={handleChange} />
              {errors?.cost && touched?.cost && (
                <p className="text-sm text-[#e13535] mt-1">{errors?.cost}</p>
              )}
            </div>

          </div>
          <div className="flex flex-col gap-2 xl:flex-row">
            <div className="w-full">
              <Input id="startTime" value={values.startTime} label="Start Time"
                variant="outlined" color={sidenavColor} onChange={handleChange} />
              {errors?.startTime && touched?.startTime && (
                <p className="text-sm text-[#e13535] mt-1">{errors?.startTime}</p>
              )}
            </div>
            <div className="w-full">
              <Input id="startAfter" value={values.startAfter} label="Start After"
                variant="outlined" color={sidenavColor} onChange={handleChange} />
              {errors?.startAfter && touched?.startAfter && (
                <p className="text-sm text-[#e13535] mt-1">{errors?.startAfter}</p>
              )}
            </div>

          </div>
          <div className="flex flex-col gap-2 xl:flex-row">
            <div className="w-full">
              <Input id="active_start" value={values.active_start} label="Active Start"
                variant="outlined" color={sidenavColor} onChange={handleChange} />
              {errors?.active_start && touched?.active_start && (
                <p className="text-sm text-[#e13535] mt-1">{errors?.active_start}</p>
              )}
            </div>
            <div className="w-full">
              <Input id="active_end" value={values.active_end} label="Active End"
                variant="outlined" color={sidenavColor} onChange={handleChange} />
              {errors?.active_end && touched?.active_end && (
                <p className="text-sm text-[#e13535] mt-1">{errors?.active_end}</p>
              )}
            </div>
          </div>
          <div>
            <div className="w-full xl:w-1/2">
              <div className="flex items-center gap-1" role="radiogroup" onChange={handleChange} >
                Capacity :
                <Radio id="4" name="capacity" label="4" value={values.capacity.min} color={sidenavColor} />
                <Radio id="8" name="capacity" label="8" value={values.capacity.mid} color={sidenavColor} />
                <Radio id="16" name="capacity" label="16" value={values.capacity.max} color={sidenavColor} />
              </div>
              {errors?.capacity && touched?.capacity && (
                <p className="text-sm text-[#e13535]">Capacity is required</p>
              )}
            </div>
            <div className="w-full xl:w-1/2">
              <div className="flex items-center gap-1" role="radiogroup" onChange={handleChange} >
                Game :
                <Radio id="soccer" name="game" label="Soccer" value={values.game.soccer} color={sidenavColor} />
                <Radio id="billiard" name="game" label="Billiard" value={values.game.billiard} color={sidenavColor} />
              </div>
              {errors?.game && touched?.game && (
                <p className="text-sm text-[#e13535]">Game is required</p>
              )}
            </div>
            <div className="w-full xl:w-1/2">
              <div className="flex items-center gap-1" role="radiogroup" onChange={handleChange}>
                TypeOfCost :
                <Radio id="coin" name="type" label="Coin" value={values.type.coin} color={sidenavColor} />
                <Radio id="gem" name="type" label="Gem" value={values.type.gem} color={sidenavColor} />
              </div>
              {errors?.type && touched?.type && (
                <p className="text-sm text-[#e13535]">Type is required</p>
              )}
            </div>
          </div>
        </div>
        <DialogFooter className="flex gap-2 mt-4">
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
export default CreateModal;