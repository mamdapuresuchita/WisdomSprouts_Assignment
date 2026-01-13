import { Navbar, Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const AppNavbar = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem("tokenTask");
  const name = localStorage.getItem("name");

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <Navbar bg="dark" variant="dark" className="px-3">
      <Container fluid>
        {/* App Name */}
        <Navbar.Brand
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
         
        </Navbar.Brand>

        {/* Right Side */}
        <div className="d-flex align-items-center gap-3">
          {!token ? (
            <Button variant="outline-light" onClick={() => navigate("/login")}>
              Login
            </Button>
          ) : (
            <>
              <span className="text-white">
                👤 {name}
              </span>
              <Button variant="outline-warning" onClick={logout}>
                Logout
              </Button>
            </>
          )}
        </div>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
