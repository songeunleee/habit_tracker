import React, { Component } from "react";

class AddForm extends Component {
  render() {
    console.log();
    return (
      <div>
        <input className="input" type="text" />
        <input className="addBtn" type="submit">
          Add
        </input>
      </div>
    );
  }
}

export default AddForm;
