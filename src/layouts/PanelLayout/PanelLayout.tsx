import { Outlet } from "react-router-dom";
import { Configurator } from "../../components";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";

const PanelLayout = () => {
  return (
    <div>
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
