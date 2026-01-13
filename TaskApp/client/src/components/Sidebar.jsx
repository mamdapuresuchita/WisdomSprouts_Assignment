import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

const Sidebar = ({ role }) => {
  return (
    <div className="bg-dark text-white p-3 vh-100" style={{ width: "220px" }}>
      <h5 className="mb-4">TaskApp</h5>

      <Nav className="flex-column">
        {role === "admin" && (
          <>
            <Nav.Link as={Link} to="/admin" className="text-white">
              Dashboard
            </Nav.Link>
            <Nav.Link as={Link} to="/admin/users" className="text-white">
              Users
            </Nav.Link>
            <Nav.Link as={Link} to="/admin/tasks" className="text-white">
              Tasks
            </Nav.Link>
          </>
        )}

        {role === "user" && (
          <>
            <Nav.Link as={Link} to="/user" className="text-white">
              Dashboard
            </Nav.Link>
            <Nav.Link as={Link} to="/user/tasks" className="text-white">
              My Tasks
            </Nav.Link>
          </>
        )}
      </Nav>
    </div>
  );
};

export default Sidebar;
