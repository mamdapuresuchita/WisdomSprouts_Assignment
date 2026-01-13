import { useEffect, useState } from "react";
import { getAllTasks, createTask, deleteTask } from "../../services/taskService";
import api from "../../services/api";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [userId, setUserId] = useState("");
  const [users, setUsers] = useState([]);

  /* ✅ FETCH TASKS */
  useEffect(() => {
    let isMounted = true;

    (async () => {
      try {
        const res = await getAllTasks();
        if (isMounted) setTasks(res.data);
      } catch (err) {
        console.error("Failed to fetch tasks", err);
      }
    })();

    return () => {
      isMounted = false;
    };
  }, []);

  /* ✅ FETCH USERS */
  useEffect(() => {
    let isMounted = true;

    (async () => {
      try {
        const res = await api.get("/users");
        if (isMounted) setUsers(res.data);
      } catch (err) {
        console.error("Failed to fetch users", err);
      }
    })();

    return () => {
      isMounted = false;
    };
  }, []);

  /* ✅ CREATE TASK */
  const handleCreate = async () => {
    try {
      await createTask({
        title,
        description,
        assignedTo: userId,
      });

      setTitle("");
      setDescription("");
      setUserId("");

      const res = await getAllTasks(); // refresh list
      setTasks(res.data);
    } catch (err) {
      console.error("Failed to create task", err);
    }
  };

  /* ✅ DELETE TASK */
  const handleDelete = async (id) => {
    try {
      await deleteTask(id);
      setTasks(prev => prev.filter(task => task.id !== id));
    } catch (err) {
      console.error("Failed to delete task", err);
    }
  };

  return (
    <>
      {/* CREATE TASK */}
      <h4>Create Task</h4>

      <input
        className="form-control mb-2"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        className="form-control mb-2"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <select
        className="form-control mb-2"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      >
        <option value="">Assign to user</option>
        {users.map((u) => (
          <option key={u.id} value={u.id}>
            {u.name}
          </option>
        ))}
      </select>

      <button className="btn btn-primary mb-4" onClick={handleCreate}>
        Create Task
      </button>

      {/* TASK LIST */}
      <div className="container mt-4">
        <h4>All Tasks</h4>

        <table className="table table-bordered mt-3">
          <thead>
            <tr>
              <th>Title</th>
              <th>Assigned To</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {tasks.map((task) => (
              <tr key={task.id}>
                <td>{task.title}</td>
                <td>{task.user?.name || "Unassigned"}</td>
                <td>
                  <span className="badge bg-info">{task.status}</span>
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(task.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Tasks;
