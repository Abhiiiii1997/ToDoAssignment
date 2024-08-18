import React, { Component } from "react";
import "./index.css";

class LabelManager extends Component {
  state = {
    newLabel: "",
  };

  handleInputChange = (e) => {
    this.setState({ newLabel: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newLabel = { name: this.state.newLabel };
    this.props.addLabel(newLabel);
    this.setState({ newLabel: "" });
  };

  render() {
    return (
      <div>
        <h3>Manage Labels</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.newLabel}
            onChange={this.handleInputChange}
            placeholder="Add a new label"
          />
          <button type="submit">Add Label</button>
        </form>
        <ul>
          {this.props.labels.map((label, index) => (
            <li className="label-item" key={index}>
              {label.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default LabelManager;
