import { useState } from "react";
import {
  Card,
  CardBody,
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";
import { sidenavTypes, useMaterialTailwindController } from "context";
import CardHeader from "components/UI/CardHeader";
import { AiOutlineBell } from "react-icons/ai";
import Notification from "./Notification/Notification";
import Empty from "./Empty/Empty";

interface T {
  id: number;
  color: any;
  message: string;
}

const data = [
  {
    id: 1,
    title: "Changes in your request!",
    desc: "Your Request was accepted",
    date: "30 Dec 2022  |  15:41",
  },
  {
    id: 2,
    title: "Changes in your request!",
    desc: "Your Request was not accepted",
    date: "30 Dec 2022  |  16:40",
  },
  {
    id: 3,
    title: "Changes in your request!",
    desc: "Your Request was not accepted",
    date: "30 Dec 2022  |  16:26",
  },
];

const Notifications = () => {
  const [controller]: any = useMaterialTailwindController();
  const { sidenavColor, sidenavType } = controller;
  const [empty, setEmpty] = useState(true);

  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <Card className={sidenavTypes[sidenavType]}>
        <CardHeader title="Notifications" />
        <CardBody className="flex flex-col items-center gap-4 p-4">
          <div className="max-w-2xl w-full">
            <Tabs value="all">
              <TabsHeader className="sm:w-[40%] w-1/2 mb-4">
                <Tab key="all" value="all" >
                  All
                </Tab>
                <Tab key="unread" value="unread">
                  Unread
                </Tab>
              </TabsHeader>
              <TabsBody
                animate={{
                  mount: { y: 0 },
                  unmount: { y: 250 },
                }}
              >
                <TabPanel className="flex flex-col p-0" key="all" value="all">
                  {data.map(({ id, title, desc, date }) => (
                    <Notification
                      id={id}
                      title={title}
                      desc={desc}
                      date={date}
                    />
                  ))}
                </TabPanel>
                <TabPanel
                  className="flex flex-col p-0"
                  key="unread"
                  value="unread"
                >
                  {empty && (
                    <Empty
                      icon={
                        <AiOutlineBell className="text-gray-500" size={30} />
                      }
                    />
                  )}
                  {/* {data.map(({ id, title, desc, date }) => (
                    <Notification
                      id={id}
                      title={title}
                      desc={desc}
                      date={date}
                    />
                  ))} */}
                </TabPanel>
              </TabsBody>
            </Tabs>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Notifications;
