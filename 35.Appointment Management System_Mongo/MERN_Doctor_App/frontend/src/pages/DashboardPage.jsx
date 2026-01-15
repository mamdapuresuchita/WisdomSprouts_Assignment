import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getLoggedUser } from "../api/userAPI";
import Appointments from "../components/Appointments";
import CreateAppointment from "../components/CreateAppointment";
import DoctorsList from "../components/DoctorsList";
import ApplyDoctor from "../components/ApplyDoctor";
import Profile from "../components/Profile";
import AppliedDoctorList from "../components/AppliedDoctorList";
import UsersList from "../components/UsersList";

const DashboardPage = () => {
  const [user, setUser] = useState(null);
  const [activePage, setActivePage] = useState("dashboard");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("tokenMERN");
    navigate("/", { replace: true });
  };

  const fetchUser = async () => {
    const res = await getLoggedUser();
    if (res.data.success) {
      setUser(res.data.user);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const renderContent = () => {
    switch (activePage) {
      case "myprofile":
       return <Profile user={user} />;
      case "appointments":
        return <Appointments user={user} />;

      case "create-appointment":
        return <CreateAppointment />;
      case "doctors":
        return <DoctorsList />;
      case "apply-doctor":
        return <ApplyDoctor />;
      case "appliedDoctorList":
        return <AppliedDoctorList/>;
        case "users":
  return <UsersList />;


      default:
        return <h3>👋 Welcome to Dashboard</h3>;
    }
  };

  const renderMenu = () => {
    if (!user) return null;

    if (user.role === "Admin") {
      return (
        <>
          <MenuBtn label="Dashboard" onClick={() => setActivePage("dashboard")} />
          <MenuBtn label="Profile" onClick={()=>setActivePage("myprofile")}/>
          <MenuBtn label="Appointments" onClick={() => setActivePage("appointments")} />
          <MenuBtn label="Approved Doctors List" onClick={() => setActivePage("doctors")} />
          <MenuBtn label="Doctors Applications" onClick={() => setActivePage("appliedDoctorList")} />
          <MenuBtn label="Users List" onClick={() => setActivePage("users")} />


        </>
      );
    }

    if (user.role === "Doctor") {
      return (
        <>
          <MenuBtn label="Dashboard" onClick={() => setActivePage("dashboard")} />
          <MenuBtn label="Profile" onClick={()=>setActivePage("myprofile")}/>
          <MenuBtn label="Appointments" onClick={() => setActivePage("appointments")} />
          
        </>
      );
    }

    if (user.role === "User") {
      return (
        <>
          <MenuBtn label="Dashboard" onClick={() => setActivePage("dashboard")} />
          <MenuBtn label="Profile" onClick={()=>setActivePage("myprofile")}/>
          <MenuBtn label="Appointments" onClick={() => setActivePage("appointments")} />
          <MenuBtn label="Create Appointment" onClick={() => setActivePage("create-appointment")} />
          <MenuBtn label="Apply Doctor" onClick={() => setActivePage("apply-doctor")} />
        </>
      );
    }
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <h4 className="text-center">👤 {user?.name}</h4>
        <div className="menu">{renderMenu()}</div>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>

      {/* Content */}
      <div className="content">{renderContent()}</div>
    </div>
  );
};

const MenuBtn = ({ label, onClick }) => (
  <button className="menu-btn" onClick={onClick}>
    {label}
  </button>
);

export default DashboardPage;
