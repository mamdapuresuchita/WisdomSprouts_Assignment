import React, { useEffect, useReducer, useState } from "react";
import taskReducer from "../hooks/taskReducer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TaskManager = () => {
  const [tasks, dispatch] = useReducer(taskReducer, [], () => {
    const savedTasks = localStorage.getItem("task63");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  //Input field
  const [taskText, setTaskText] = useState("");
  const [description, setDescription] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [editTask, setEditTask] = useState(null);

  //To save task in local storage

  useEffect(() => {
    localStorage.setItem("task63", JSON.stringify(tasks));
  }, [tasks]);

  //Add task

  const addTask = () => {
    if (taskText.trim() === "") return;

    if (editTask) {
      //updating task
      dispatch({
        type: "updateTask",
        payload: { id: editTask, text: taskText, description: description },
      });
      toast.info("✅ Task updated successfully!");
      setEditTask(null);
    } else {
      //adding task
      dispatch({
        type: "addTask",
        payload: { text: taskText, description: description },
      });
      toast.success("🎉 Task added successfully!");
    }

    setTaskText("");
    setDescription("");
    setShowModal(false);
  };

  //Delete task

  const deleteTask = (taskId) => {
    dispatch({ type: "deleteTask", payload: taskId });
    toast.warn("🗑️ Task deleted!");
  };

  //edit task

  const updateTask = (task) => {
    setTaskText(task.text);
    setDescription(task.description);
    setEditTask(task.id);
    setShowModal(true);
  };

  return (
    <div className="container">
      
      <div className="addTaskBtn text-center mb-3">
      <button className="fab btn px-4 py-2 fw-semibold" onClick={() => setShowModal(true)}>Add Task</button>
</div>
      <ToastContainer />
      {/* Table display tasks */}

      {tasks.length === 0 ? (
        <p>No tasks added</p>
      ) : (
        <table className="table  mt-4 ">
          <thead className="border border-bottom-0 ">
            <tr>
              <th>Sr.No</th>
              <th>Task Title</th>
              <th>Task Description</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {tasks.map((t, i) => (
              <tr key={t.id}>
                <td>{i + 1}</td>
                <td>{t.text}</td>
                <td>{t.description}</td>
                <td>
                  <button className="tableBtn deleteBtn" onClick={() => deleteTask(t.id)}>Delete task</button>
                </td>
                <td>
                  <button className="tableBtn editBtn" onClick={() => updateTask(t)}>Edit task</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* MOdal code*/}
      {showModal && (
        <>
          <div
            className="modal fade show"
            style={{ display: "block", zIndex: 1050 }}
            tabIndex="-1"
            role="dialog"
            aria-modal="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Add Task Details</h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    onClick={() => setShowModal(false)}
                  ></button>
                </div>
                <div className="modal-body">
                  <input
                    type="text"
                    value={taskText}
                    onChange={(e) => setTaskText(e.target.value)}
                    placeholder="Task Title"
                  />

                  <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Task Description"
                  />
                </div>

                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={addTask}
                  >
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default TaskManager;
