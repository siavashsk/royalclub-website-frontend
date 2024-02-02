import { Outlet } from "react-router-dom";
import { Configurator } from "../../components";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import { useMaterialTailwindController } from "context";

const PanelLayout = () => {
  const [controller]: any = useMaterialTailwindController();
  const { sidenavType } = controller;

  return (
    <div className={`h-[100vh] ${sidenavType === "dark" ? "bg-[#111]" : "bg-[#e9e9e9]"}`}>
      <Sidebar />
      <div className="p-4 xl:ml-80">
        <Configurator />
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default PanelLayout;
