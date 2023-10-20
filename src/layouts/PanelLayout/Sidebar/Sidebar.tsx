import { useMaterialTailwindController } from "../../../context";
import { sidebarData } from "../../../services/data/data";
import SidebarTop from "./SidebarTop/SidebarTop";
import ItemMenu from "./ItemMenu/ItemMenu";

const Sidebar = () => {
  const [controller]: any = useMaterialTailwindController();
  const { sidenavType, openSidenav } = controller;
  const sidenavTypes: any = {
    dark: "bg-gradient-to-br from-gray-800 to-gray-900",
    white: "bg-white shadow-lg",
    transparent: "bg-transparent",
  };
  return (
    <aside
      className={`${sidenavTypes[sidenavType]} ${
        openSidenav ? "translate-x-0" : "-translate-x-80"
      } fixed inset-0 z-50 my-4 ml-4 overflow-y-scroll scrollbar-hide h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0`}
    >
      <SidebarTop />
      <div className="m-4">
        <ul className="mb-4 flex flex-col gap-1">
          {sidebarData.map(({ id, icon, name, path }) => (
            <li key={id}>
              <ItemMenu icon={icon} name={name} path={path} />
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
