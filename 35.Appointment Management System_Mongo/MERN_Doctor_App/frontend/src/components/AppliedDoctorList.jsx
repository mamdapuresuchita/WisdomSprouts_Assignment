import { useEffect, useState } from "react";
import { appliedDoctorList, updateStatusDoctor } from "../api/doctorAPI";
import { toast } from "react-toastify";

const AppliedDoctorList = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAppliedDoctors();
  }, []);

  const fetchAppliedDoctors = async () => {
    try {
      const res = await appliedDoctorList();
      if (res.data.success) {
        // Only Pending & Rejected
        const filtered = res.data.data.filter(
          (doc) => doc.status !== "Approved"
        );
        setDoctors(filtered);
      }
    } catch {
      toast.error("Failed to load applied doctors");
    } finally {
      setLoading(false);
    }
  };

  const handleStatusUpdate = async (id, status) => {
    try {
      const res = await updateStatusDoctor(id, { status });
      if (res.data.success) {
        toast.success(`Doctor ${status}`);
        fetchAppliedDoctors();
      }
    } catch {
      toast.error("Status update failed");
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="doctor-page">
      <h3 className="page-title">📝 Doctor Applications</h3>

      {doctors.length === 0 ? (
        <p>No applications found</p>
      ) : (
        <table className="doctor-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Specialization</th>
                <th>Fees</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {doctors.map((doc) => (
              <tr key={doc._id}>
                <td data-label="Name">{doc.user?.name}</td>
                <td data-label="Email">{doc.user?.email}</td>
                <td data-label="Specialization">{doc.specialist}</td>

                <td>{doc.fees}</td>
                <td data-label="Status">
                  <span className={`status ${doc.status.toLowerCase()}`}>
                    {doc.status}
                  </span>
                </td>

                <td>
                  {doc.status === "Pending" ? (
                    <>
                      <button
                        className="btn success"
                        onClick={() => handleStatusUpdate(doc._id, "Accept")}
                      >
                        Approve
                      </button>

                      <button
                        className="btn danger"
                        onClick={() => handleStatusUpdate(doc._id, "Reject")}
                      >
                        Reject
                      </button>
                    </>
                  ) : (
                    <span className="text-muted">No Action</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AppliedDoctorList;
