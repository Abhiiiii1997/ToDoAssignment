import React, { Component } from "react";
import "./index.css";

class TodoItem extends Component {
  state = {
    isEditing: false,
    editedText: this.props.task.text,
    editedDescription: this.props.task.description,
  };

  toggleEdit = () => {
    this.setState({ isEditing: !this.state.isEditing });
  };

  handleTextChange = (e) => {
    this.setState({ editedText: e.target.value });
  };

  handleDescriptionChange = (e) => {
    this.setState({ editedDescription: e.target.value });
  };

  handleEditSubmit = (e) => {
    e.preventDefault();
    this.props.updateTask(
      this.props.index,
      this.state.editedText,
      this.state.editedDescription
    );
    this.toggleEdit();
  };

  render() {
    const { task, index, toggleTaskCompletion, deleteTask } = this.props;
    const { isEditing, editedText, editedDescription } = this.state;

    return (
      <li
        className={`todo-item-container ${task.isChecked ? "completed" : ""}`}
      >
        {isEditing ? (
          <form onSubmit={this.handleEditSubmit}>
            <input
              type="text"
              value={editedText}
              onChange={this.handleTextChange}
              placeholder="Edit task"
              className="add-task-input"
            />
            <textarea
              value={editedDescription}
              onChange={this.handleDescriptionChange}
              placeholder="Edit description"
              rows="3"
            />
            <div className="edit-buttons">
              <button type="submit">Save</button>
              <button type="button" onClick={this.toggleEdit}>
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <>
            <div className="task-content">
              <span
                className={`task-sub-heading  ${
                  task.isChecked ? "checked" : ""
                }`}
              >
                {task.text}
              </span>
              <p className="task-description">{task.description}</p>
              <span className="label">{task.label}</span>
            </div>
            <div className="button-group">
              <button
                onClick={() => toggleTaskCompletion(index)}
                className={
                  task.isChecked ? "button-complete" : "button-incomplete"
                }
              >
                {task.isChecked ? "Complete" : "Not Complete"}
              </button>
              <button
                onClick={() => deleteTask(index)}
                className="delete-button"
              >
                Delete
              </button>
              <button onClick={this.toggleEdit} className="edit-button">
                Edit
              </button>
            </div>
          </>
        )}
      </li>
    );
  }
}

export default TodoItem;
