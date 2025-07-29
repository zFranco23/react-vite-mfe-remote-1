import { Outlet } from "react-router";
import Navbar from "./navbar";
import Links from "./links";

const Layout = () => {
  return (
    <div id="mfe-remote-1" className="flex flex-col min-h-screen">
      <Navbar />

      <div className="h-full mt-2 max-w-3xl p-4 ml-auto mr-auto w-full">
        <Links />

        <div className="w-full bg-white rounded-lg shadow-lg p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
