import React, { Component } from "react";
import "./index.css";

class TaskForm extends Component {
  state = {
    taskText: "",
    taskDescription: "",
    selectedLabel: "",
  };

  handleTextChange = (e) => {
    this.setState({ taskText: e.target.value });
  };

  handleDescriptionChange = (e) => {
    this.setState({ taskDescription: e.target.value });
  };

  handleLabelChange = (e) => {
    this.setState({ selectedLabel: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      text: this.state.taskText,
      description: this.state.taskDescription,
      isChecked: false,
      label: this.state.selectedLabel,
    };
    this.props.addTask(newTask);
    this.setState({ taskText: "", taskDescription: "", selectedLabel: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.taskText}
          onChange={this.handleTextChange}
          placeholder="Add a new task"
          required
        />
        <textarea
          value={this.state.taskDescription}
          onChange={this.handleDescriptionChange}
          placeholder="Add a description"
          rows="3"
        />
        <select
          value={this.state.selectedLabel}
          onChange={this.handleLabelChange}
        >
          <option value="">Select Label</option>
          {this.props.labels.map((label, index) => (
            <option key={index} value={label.name}>
              {label.name}
            </option>
          ))}
        </select>
        <button type="submit">Add Task</button>
      </form>
    );
  }
}

export default TaskForm;
