import React, { Component } from "react";

class AddForm extends Component {
  render() {
    inputchange = (e) => {
      console.log(e);
    };
    return (
      <div>
        <input
          onChange={(e) => this.inputchange(e)}
          className="input"
          type="text"
        />
        <button className="addBtn">Add</button>
      </div>
    );
  }
}

export default AddForm;
