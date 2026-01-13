import Sidebar from "../../components/Sidebar";

import { Card, Row, Col } from "react-bootstrap";
import AppNavbar from "../../components/Navbar";
import { useEffect, useState } from "react";
import api from "../../services/api";

const AdminDashboard = () => {

    const [stats,setStats]=useState({
        users:0,
        tasks:0,
        pending:0,
        completed:0,
    });

    useEffect(()=>{

        const fetchStats=async()=>{
            try {
                const res = await api.get("/admin/stats");
                setStats(res.data);
            } catch (err) {
                console.error("Couldnot fetch stats",err)
            }
        }

        fetchStats();
    },[])

  return (
    <div className="d-flex">
      <Sidebar role="admin" />

      <div className="flex-grow-1">
       {/* <AppNavbar/> */}
        <div className="p-4">
          <Row>
            <Col md={3}>
              <Card className="text-center">
                <Card.Body>
                  <h5>Total Users</h5>
                  <h2>{stats.users}</h2>
                </Card.Body>
              </Card>
            </Col>

            <Col md={3}>
              <Card className="text-center">
                <Card.Body>
                  <h5>Total Tasks</h5>
                  <h2>{stats.tasks}</h2>
                </Card.Body>
              </Card>
            </Col>

            <Col md={3}>
              <Card className="text-center">
                <Card.Body>
                  <h5>Pending</h5>
                  <h2>{stats.pending}</h2>
                </Card.Body>
              </Card>
            </Col>

            <Col md={3}>
              <Card className="text-center">
                <Card.Body>
                  <h5>Completed</h5>
                  <h2>{stats.completed}</h2>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
