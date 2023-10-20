import { Button, Dialog, DialogHeader, DialogBody, DialogFooter, Avatar, Typography, Input, Radio, Switch } from "@material-tailwind/react";
import { TfiCup } from "react-icons/tfi";
import { FaBan, FaRegGem } from "react-icons/fa";
import { GiFireGem, GiTwoCoins } from "react-icons/gi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IModal, IModalValues } from "services/types/modal";
import { VscDebugDisconnect } from "react-icons/vsc";
import { HiOutlineStatusOnline } from "react-icons/hi";
import { MdSportsSoccer } from "react-icons/md";
import { RiRadioButtonLine, RiBilliardsFill } from "react-icons/ri";
import { useMaterialTailwindController } from "context";
import moment from "moment";
import { AiOutlineEdit, AiOutlineMoneyCollect } from "react-icons/ai";
import { useState } from "react";
import { useFormik } from "formik";
import { useSelector } from "react-redux";
import { errorMessage, successMessage } from "services/utils/toastMessages";
import { ToastContainer } from "react-toastify";
import axios from "axios";

const Modal = ({ size, open, handleOpen, data, setForceUpdate }: IModal) => {
  const [isEdit, setIsEdit] = useState(false);
  const [controller]: any = useMaterialTailwindController();
  const { sidenavColor } = controller;
  const { token } = useSelector((state: any) => state.auth);

  const lastOnlineDate = moment(
    data.last_online.slice(0, 10),
    "YYYYMMDD"
  ).fromNow();
  const lastDisconnectDate = moment(
    data.last_disconnect.slice(0, 10),
    "YYYYMMDD"
  ).fromNow();

  async function onSubmit(values: IModalValues) {
    const UpdatedValues = {
      username: values.username,
      phone: values.phone,
      coin: values.coin,
      cup: values.cup,
      canWithdraw: values.canWithdraw === "Yes" ? true : false,
      banLeague: values.banLeague,
      soccer_cup: values.soccer_cup,
      soccer_level: values.soccer_level,
      billiard_cup: values.billiard_cup,
      billiard_level: values.billiard_cup,
      invited_by: values.invited_by
    };
    axios.put(`https://royalclub.com/api/admin/users?_id=${data.id}`, UpdatedValues, { headers: { token: token } })
      .then(({ status }) => {
        if (status === 200) {
          successMessage('Information Updated')
          handleOpen()
          setForceUpdate((prev: number) => prev + 1)
        } else {
          errorMessage(`Error Occured | Code: ${status}`)
        }
      }).catch((err) => console.log(err))

  }

  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      username: data.username,
      phone: data.phone,
      coin: data.coin,
      cup: data.cup,
      canWithdraw: { yes: "Yes", no: "No" },
      banLeague: data.banLeague,
      soccer_cup: data.soccer_cup,
      soccer_level: data.soccer_level,
      billiard_cup: data.billiard_cup,
      billiard_level: data.billiard_cup,
      invited_by: data.invited_by
    },
    onSubmit,
  });

  const CANWITHDRAW = data.canWithdraw ? (<p className="text-green-600">Yes</p>) : (<p className="text-red-600">No</p>);

  const BANLEAGUE = data.banLeague ? <p>True</p> : <p>False</p>;

  return (
    <Dialog open={open} size={size} handler={handleOpen}>
      <form onSubmit={handleSubmit}>
        <DialogHeader>
          <div className="flex justify-between items-center gap-4 w-full">
            <div className="relative w-[93px]">
              <Avatar src={`/images/avatars/${data.avatar}.png`} alt={data.username} size="xl" className="rounded-full" />
              <div className="absolute right-0 bottom-0">
                {data.online ? (
                  <RiRadioButtonLine size={25} color="#24d900" />
                ) : (
                  <RiRadioButtonLine size={25} color="gray" />
                )}
              </div>
            </div>
            <div>
              {isEdit ? (
                <Input id="username" value={values.username} label="New Username" variant="outlined" color={sidenavColor} onChange={handleChange} />
              ) : (
                <Typography variant="h3">{data.username}</Typography>
              )}
            </div>

            <div className="hidden sm:flex items-center gap-4">
              <Typography className="text-xs font-semibold text-blue-gray-400">
                <div className="flex flex-col items-center">
                  <GiTwoCoins size={25} /><p className="text-sm mt-1">{isEdit ?
                    <Input id="coin" value={values.coin} label="Coin Amount" variant="outlined" color={sidenavColor} onChange={handleChange} />
                    : data.coin}</p>
                </div>
              </Typography>

              <Typography className="text-xs font-semibold text-blue-gray-400">
                <div className="flex flex-col items-center text-amber-800">
                  <TfiCup size={22} /><p className="text-sm mt-1">{isEdit ?
                    <Input id="cup" value={values.cup} label="Cup Amount" variant="outlined" color={sidenavColor} onChange={handleChange} />
                    : data.cup}</p>
                </div>
              </Typography>
              <Typography className="text-xs font-semibold text-blue-gray-400">
                <div className="flex flex-col items-center text-green-800">
                  <GiFireGem size={25} /><p className="text-sm mt-1">{data.gem}</p>
                </div>
              </Typography>
            </div>
          </div>
        </DialogHeader>
        <DialogBody divider className="overflow-y-scroll">
          <ToastContainer />
          <div className="h-[77vh] w-full">
            <div className="flex sm:hidden items-center justify-around gap-4">
              <Typography className="text-xs font-semibold text-blue-gray-400">
                <div className="flex flex-col items-center">
                  <GiTwoCoins size={25} /><p className="text-sm mt-1">{data.coin}</p>
                </div>
              </Typography>
              <Typography className="text-xs font-semibold text-blue-gray-400">
                <div className="flex flex-col items-center text-green-800">
                  <GiFireGem size={25} /><p className="text-sm mt-1">{data.gem}</p>
                </div>
              </Typography>
              <Typography className="text-xs font-semibold text-blue-gray-400">
                <div className="flex flex-col items-center text-amber-800">
                  <TfiCup size={22} /><p className="text-sm mt-1">{data.cup}</p>
                </div>
              </Typography>
            </div>

            {/* BODY DATA */}
            <div className="overflow-y-scroll scrollbar-hide bg-white shadow sm:rounded-lg">
              <div className="flex justify-between items-center px-4 py-5 sm:px-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    User Information
                  </h3>
                  <p className="flex items-center gap-2 mt-1 max-w-2xl text-sm text-blue-gray-800">
                    <BsFillTelephoneFill size={15} />
                    Phone:{" "}
                    {isEdit ? (
                      <Input id="phone" value={values.phone} label="Phone" variant="outlined" color={sidenavColor} onChange={handleChange} />
                    ) : (
                      data.phone
                    )}
                  </p>
                </div>
                <div className="pb-4">
                  <Button
                    color={sidenavColor} variant="gradient" className="flex items-center gap-2"
                    onClick={() => setIsEdit((prev) => !prev)}>
                    <AiOutlineEdit size={20} />Edit Information
                  </Button>
                </div>
              </div>
              <div className="border-t border-gray-200">
                <dl>
                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="flex gap-2 text-sm font-medium text-blue-gray-400">
                      <MdSportsSoccer color="teal" size={20} />Soccer
                    </dt>
                    <dd className="flex justify-between gap-4 mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                      <div className="flex items-center gap-2"><p>Cup: </p>{isEdit ?
                        <Input id="soccer_cup" value={values.soccer_cup} label="Soccer Cup" variant="outlined" color={sidenavColor}
                          onChange={handleChange} /> : <p>{data.soccer_cup}</p>}</div>
                      <div className="flex items-center gap-2"><p>Level: </p>{isEdit ?
                        <Input id="soccer_level" value={values.soccer_level} label="Soccer Level" variant="outlined" color={sidenavColor}
                          onChange={handleChange} /> : <p>{data.soccer_level}</p>}</div>
                      <div><p>Win : {data.soccer_win}</p></div>
                      <div><p>Total : {data.soccer_total}</p></div>
                    </dd>
                  </div>
                  <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="flex gap-2 text-sm font-medium text-blue-gray-400">
                      <RiBilliardsFill color="black" size={20} /> Billiard
                    </dt>
                    <dd className="flex justify-between gap-4 mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                      <div className="flex items-center gap-2"><p>Cup: </p>{isEdit ?
                        <Input id="billiard_cup" value={values.billiard_cup} label="Billiard Cup" variant="outlined" color={sidenavColor}
                          onChange={handleChange} /> : <p>{data.billiard_cup}</p>}</div>
                      <div className="flex items-center gap-2"><p>Level: </p>{isEdit ?
                        <Input id="billiard_level" value={values.billiard_level} label="Billiard Level" variant="outlined" color={sidenavColor}
                          onChange={handleChange} /> : <p>{data.billiard_level}</p>}</div>
                      <div><p>Win : {data.billiard_win}</p> </div>
                      <div><p>Total : {data.billiard_total}</p> </div>
                    </dd>
                  </div>
                  <div className="bg-gray-50 px-4 py-5 flex justify-between gap-4 sm:px-6">
                    <dt className="flex gap-2 text-sm font-medium text-blue-gray-400">
                      <FaRegGem color="green" size={20} />Cash Gem
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                      {data.cash_gem}
                    </dd>
                  </div>
                  <div className="bg-white px-4 py-5 flex justify-between gap-4 sm:px-6">
                    <dt className="flex gap-2 text-sm font-medium text-blue-gray-400">
                      <FaBan color="red" size={20} />Ban League
                    </dt>
                    <dd className="flex gap-3 mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                      {isEdit && data.banLeague ? <Switch id="banLeague" value={values.banLeague} onChange={handleChange} color={sidenavColor} /> : BANLEAGUE}
                    </dd>
                  </div>
                  <div className="bg-gray-50 px-4 py-5 flex justify-between gap-4 sm:px-6">
                    <dt className="flex gap-2 text-sm font-medium text-blue-gray-400">
                      <AiOutlineMoneyCollect color="gray" size={22} />Can Withdraw
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                      {isEdit ? (
                        <div className="flex items-center gap-1" role="radiogroup" onChange={handleChange}>
                          <Radio id="yes" name="canWithdraw" label="Yes" value={values.canWithdraw.yes} color={sidenavColor} />
                          <Radio id="no" name="canWithdraw" label="No" value={values.canWithdraw.no} color={sidenavColor} />
                        </div>
                      ) : (
                        CANWITHDRAW
                      )}
                    </dd>
                  </div>
                  <div className="bg-white px-4 py-5 flex justify-between sm:px-6">
                    <dt className="flex gap-2 text-sm font-medium text-blue-gray-400">
                      <HiOutlineStatusOnline color="#3eb802" size={20} />Last Online
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                      {lastOnlineDate}
                    </dd>
                  </div>
                  <div className="bg-gray-50 px-4 py-5 flex justify-between sm:px-6">
                    <dt className="flex gap-2 text-sm font-medium text-blue-gray-400">
                      <VscDebugDisconnect color="gray" size={20} />Last Disconnect
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                      {lastDisconnectDate}
                    </dd>
                  </div>
                  <div className="bg-white px-4 py-5 flex justify-between gap-4 sm:px-6">
                    <dt className="flex gap-2 text-sm font-medium text-blue-gray-400">
                      Invited by :
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                      {isEdit ? (
                        <Input id="invited_by" size="md" value={values.invited_by} label="Invited by" variant="outlined" color={sidenavColor} onChange={handleChange} />
                      ) : (
                        data.invited_by
                      )}
                    </dd>
                  </div>
                </dl>
              </div>
              <hr />

              {/*  user item */}
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">User Items</h3>

                <div className="bg-gray-50 px-4 py-5 flex justify-between gap-4 sm:px-6">
                  <dt className="flex gap-2 text-sm font-medium text-blue-gray-400">
                    Avatars
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    <div className="flex gap-3">
                      {data.items.avatars.map((item: any) => (
                        <div key={item.id}>
                          <Avatar src={`/images/avatars/${item}.png`} alt={item} size="md" className="rounded-full" />
                        </div>
                      ))}
                    </div>
                  </dd>
                </div>

                <div className="bg-white px-4 py-5 flex justify-between gap-4 sm:px-6">
                  <dt className="flex gap-2 text-sm font-medium text-blue-gray-400">
                    Cues
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    {data.items.cues.map((item: any) => (
                      <div key={item.id}>
                        <img src={`/images/assets/cues/${item.name}.png`}
                          alt={item.name} className="w-40 h-4"
                        />
                      </div>
                    ))}
                  </dd>
                </div>

                <div className="bg-gray-50 px-4 py-5 flex justify-between gap-4 sm:px-6">
                  <dt className="flex gap-2 text-sm font-medium text-blue-gray-400">
                    Marbles
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    <div className="flex gap-3">
                      {data.items.marbles.map((item: any) => (
                        <div key={item.id}>
                          <Avatar
                            src={`/images/assets/marbles/${item.name}.png`}
                            alt={item.name} size="md" className="rounded-full"
                          />
                        </div>
                      ))}
                    </div>
                  </dd>
                </div>

                <div className="bg-white px-4 py-5 flex justify-between gap-4 sm:px-6">
                  <dt className="flex gap-2 text-sm font-medium text-blue-gray-400">Plans</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    <div className="flex gap-3">
                      {data.items.plans.map((item: any) => (
                        <div key={item.id}>
                          <img src={`/images/assets/plans/${item.name}.png`}
                            alt={item.name} className="w-32 h-28" />
                        </div>
                      ))}
                    </div>
                  </dd>
                </div>
              </div>
            </div>
          </div>
        </DialogBody>
        <DialogFooter>
          {isEdit && (
            <Button variant="gradient" color={sidenavColor} type="submit">
              <span>Save Changes</span>
            </Button>
          )}
          <Button variant="outlined" className="mx-2" color={sidenavColor} onClick={handleOpen}>
            <span>Close</span>
          </Button>
        </DialogFooter>
      </form>
    </Dialog>
  );
};
export default Modal;