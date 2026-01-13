import { Routes, Route, BrowserRouter } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

import AdminLayout from "./components/AdminLayout";
import UserLayout from "./components/UserLayout";

import AdminDashboard from "./pages/admin/AdminDashboard";
import Users from "./pages/admin/Users";
import Tasks from "./pages/admin/Tasks";

import UserDashboard from "./pages/user/UserDashboard";
import MyTasks from "./pages/user/MyTasks";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      {/* Auth */}
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* ADMIN ROUTES */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute role="admin">
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<AdminDashboard />} />
        <Route path="users" element={<Users />} />
        <Route path="tasks" element={<Tasks />} />
      </Route>

      {/* USER ROUTES */}
      <Route
        path="/user"
        element={
          <ProtectedRoute role="user">
            <UserLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<UserDashboard />} />
        <Route path="tasks" element={<MyTasks />} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
