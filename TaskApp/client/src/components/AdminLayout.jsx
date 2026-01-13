import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="d-flex">
      <Sidebar role={user?.role} />

      <div className="flex-grow-1">
        <Navbar />
        <div className="p-4">
          <Outlet /> {/* 👈 THIS IS WHY BLANK PAGE WAS COMING */}
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
