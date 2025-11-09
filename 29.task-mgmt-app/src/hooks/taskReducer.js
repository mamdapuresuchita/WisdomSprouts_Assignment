import React from "react";

const taskReducer = (state, action) => {
  switch (action.type) {
    case "addTask":
      return [
        ...state,
        {
          id: Date.now(),
          text: action.payload.text,
          description: action.payload.description,
        },
      ];

    case "deleteTask":
      return state.filter((task) => task.id !== action.payload);

    case "updateTask":
      return state.map((task) =>
        task.id === action.payload.id
          ? {
              ...task,
              text: action.payload.text,
              description: action.payload.description,
            }
          : task
      );

    case "loadTasks":
      return action.payload;

    default:
      return state;
  }
};

export default taskReducer;
