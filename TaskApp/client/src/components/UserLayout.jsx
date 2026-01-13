import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const UserLayout = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="d-flex">
      <Sidebar role={user?.role} />

      <div className="flex-grow-1">
        <Navbar />
        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default UserLayout;
