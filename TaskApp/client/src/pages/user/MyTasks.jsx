import { useEffect, useState } from "react";
import {getMyTasks,updateTaskStatus} from "../../services/taskService";

const MyTasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchMyTasks = async () => {
      try {
        const res = await getMyTasks();
        setTasks(res.data);
      } catch (err) {
        console.error("Failed to fetch my tasks", err);
      }
    };

    fetchMyTasks();
  }, []); // ✅ safe

  const updateStatus = async (id, status) => {
    try {
      await updateTaskStatus(id, status);
      setTasks(prev =>
        prev.map(task =>
          task.id === id ? { ...task, status } : task
        )
      );
    } catch (err) {
      console.error("Status update failed", err);
    }
  };

  return (
    <div className="container mt-4">
      <h4>My Tasks</h4>

      {tasks.map(task => (
        <div className="card mb-3" key={task.id}>
          <div className="card-body">
            <h5>{task.title}</h5>

            <select
              className="form-select w-50"
              value={task.status}
              onChange={(e) =>
                updateStatus(task.id, e.target.value)
              }
            >
              <option>Pending</option>
              <option>In Progress</option>
              <option>Completed</option>
            </select>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyTasks;
