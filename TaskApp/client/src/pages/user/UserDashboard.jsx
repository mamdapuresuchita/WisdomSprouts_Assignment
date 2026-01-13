import Sidebar from "../../components/Sidebar";

import { Card } from "react-bootstrap";
import AppNavbar from "../../components/Navbar";

const UserDashboard = () => {
  return (
    <div className="d-flex">
      <Sidebar role="user" />

      <div className="flex-grow-1">
        <AppNavbar />

        <div className="p-4">
          <Card>
            <Card.Body>
              <h4>Welcome 👋</h4>
              <p>Check your assigned tasks and update status.</p>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
