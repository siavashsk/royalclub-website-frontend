import { useState } from "react";
import {
  Avatar,
  Card,
  CardBody,
  Switch,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import CardHeader from "components/UI/CardHeader";
import EmptyTab from "components/UI/Empty/EmptyTab";
import {
  AiOutlineEdit,
  AiOutlineSetting,
} from "react-icons/ai";
import { platformSettingsData } from "services/data/data";
import ProfileInfoCard from "components/UI/ProfileInfoCard";
import { sidenavTypes, useMaterialTailwindController } from "context";

const Settings = () => {
  const [controller]: any = useMaterialTailwindController();
  const { sidenavType, sidenavColor } = controller;

  const [empty, setEmpty] = useState(false);


  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <Card className={`${sidenavTypes[sidenavType]}`}>
        <CardHeader title="Settings" />
        <CardBody className="p-4">
          {empty && (
            <EmptyTab
              icon={<AiOutlineSetting size={40} className="text-blue-gray-400" />}
            />
          )}

          <div className="mb-10 flex items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <Avatar
                src="/images/avatars/15.png"
                alt="user"
                size="xl"
                className="rounded-full shadow-lg shadow-blue-gray-500/40"
              />
              <div>
                <Typography variant="h5" color={sidenavType === "dark" ? 'white' : 'blue-gray'} className="mb-1">
                  Siavash Khani 51
                </Typography>
                <Typography
                  variant="small"
                  className="font-normal text-blue-gray-400"
                >
                  Billiard game manager
                </Typography>
              </div>
            </div>
          </div>
          <div className="gird-cols-1 mb-12 grid gap-12 px-4 lg:grid-cols-2 xl:grid-cols-2">
            <div>
              <Typography variant="h6" color={sidenavType === "dark" ? 'white' : 'blue-gray'} className="mb-3">
                Platform Settings
              </Typography>
              <div className="flex flex-col gap-12">
                {platformSettingsData.map(({ title, options }: any) => (
                  <div key={title}>
                    <Typography className="mb-4 block text-xs font-semibold uppercase text-blue-gray-400">
                      {title}
                    </Typography>
                    <div className="flex flex-col gap-6">
                      {options.map(({ checked, label }: any) => (
                        <Switch
                          key={label}
                          id={label}
                          label={label}
                          color={sidenavColor}
                          defaultChecked={checked}
                          labelProps={{
                            className: "text-sm font-normal text-blue-gray-400",
                          }}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <ProfileInfoCard
              title="Profile Information"
              description=""
              details={{
                "first name": "Siavash khani", mobile: "+989017079374",
                email: "siavashkhani.work@gmail.com", location: "Tehran - IRAN"
              }}
              action={
                <Tooltip content="Edit Profile">
                  <AiOutlineEdit size={25} className="cursor-pointer text-blue-gray-400" />
                </Tooltip>
              }
            />
          </div>
        </CardBody>
      </Card>
    </div>
  );
};
export default Settings;