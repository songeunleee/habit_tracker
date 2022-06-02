import React, { Component } from "react";

class AddForm extends Component {
  inputchange = (e) => {
    console.log(e);
  };

  render() {
    return (
      <div>
        <input onChange={this.inputchange} className="input" type="text" />
        <button className="addBtn">Add</button>
      </div>
    );
  }
}

export default AddForm;
