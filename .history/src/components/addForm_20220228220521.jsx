import React, { Component } from "react";

class AddForm extends Component {
  render() {
    console.log(event);
    return (
      <div>
        <input className="input" type="submit" />
        <button className="addBtn">Add</button>
      </div>
    );
  }
}

export default AddForm;
