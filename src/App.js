import React, { Component } from "react";

import "./App.css";
import TaskForm from "./Components/TaskForm";
import TodoList from "./Components/TodoList";
import LabelManager from "./Components/LabelManager";

class App extends Component {
  state = {
    tasks: [],
    labels: [],
  };

  componentDidMount() {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const savedLabels = JSON.parse(localStorage.getItem("labels")) || [];
    this.setState({ tasks: savedTasks, labels: savedLabels });
  }

  saveToLocalStorage = () => {
    localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
    localStorage.setItem("labels", JSON.stringify(this.state.labels));
  };

  addTask = (task) => {
    this.setState(
      (prevState) => ({
        tasks: [...prevState.tasks, task],
      }),
      this.saveToLocalStorage
    );
  };

  deleteTask = (index) => {
    const updatedTasks = this.state.tasks.filter((_, i) => i !== index);
    this.setState({ tasks: updatedTasks }, this.saveToLocalStorage);
  };

  toggleTaskCompletion = (index) => {
    const updatedTasks = [...this.state.tasks];
    updatedTasks[index].isChecked = !updatedTasks[index].isChecked;
    this.setState({ tasks: updatedTasks }, this.saveToLocalStorage);
  };

  addLabel = (label) => {
    this.setState(
      (prevState) => ({
        labels: [...prevState.labels, label],
      }),
      this.saveToLocalStorage
    );
  };

  updateTask = (index, newText, newDescription) => {
    const updatedTasks = [...this.state.tasks];
    updatedTasks[index].text = newText;
    updatedTasks[index].description = newDescription;
    this.setState({ tasks: updatedTasks }, this.saveToLocalStorage);
  };

  render() {
    return (
      <div className="app-container">
        <h1 className="heading">Todo List</h1>
        <TaskForm addTask={this.addTask} labels={this.state.labels} />
        <h2 className="sub-heading">Task</h2>
        <TodoList
          tasks={this.state.tasks}
          toggleTaskCompletion={this.toggleTaskCompletion}
          deleteTask={this.deleteTask}
          updateTask={this.updateTask}
        />
        <LabelManager labels={this.state.labels} addLabel={this.addLabel} />
      </div>
    );
  }
}

export default App;
