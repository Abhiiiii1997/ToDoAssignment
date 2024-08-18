import React from "react";
import TodoItem from "../TodoItem";
import "./index.css";

const TodoList = ({ tasks, toggleTaskCompletion, deleteTask, updateTask }) => (
  <ul>
    {tasks.length === 0 ? (
      <div className="empty-container">
        <img
          src="https://ouch-cdn2.icons8.com/VGdlqczqVokCME57m8K2CYx65qXfQQx3qJb187MjU1I/rs:fit:368:368/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNTg4/Lzg2YTMxMTI2LTc4/NzktNDI4My05Yjky/LWYyMjliNDc0OGU4/NC5zdmc.png"
          alt="No tasks"
          className="empty-logo"
        />
        <p>No tasks available</p>
      </div>
    ) : (
      tasks.map((task, index) => (
        <TodoItem
          key={index}
          index={index}
          task={task}
          toggleTaskCompletion={toggleTaskCompletion}
          deleteTask={deleteTask}
          updateTask={updateTask}
        />
      ))
    )}
  </ul>
);

export default TodoList;
