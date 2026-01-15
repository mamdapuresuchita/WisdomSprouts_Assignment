import { useEffect, useState } from "react";
import { getApprovedDoctorList } from "../api/doctorAPI";
import { toast } from "react-toastify";

const DoctorsList = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchApprovedDoctors();
  }, []);

  const fetchApprovedDoctors = async () => {
    try {
      const res = await getApprovedDoctorList();
      if (res.data.success) {
        setDoctors(res.data.data);
      }
    } catch {
      toast.error("Failed to load approved doctors");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="doctor-page">
      <h3 className="page-title"> List of Doctors</h3>

      {doctors.length === 0 ? (
        <p>No approved doctors found</p>
      ) : (
        <table className="doctor-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Specialization</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {doctors.map((doc) => (
              <tr key={doc._id}>
                <td>{doc.user?.name}</td>
                <td>{doc.user?.email}</td>
                <td>{doc.specialist}</td>
                <td>{doc.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default DoctorsList;
