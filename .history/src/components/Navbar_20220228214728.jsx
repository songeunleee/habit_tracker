import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div>
        <i className="navbar-logo fas fa-leaf"></i>
        <span>Habbit Tracker</span>
        <span className="navbar-count">{this.props.TotalCount}</span>
      </div>
    );
  }
}

export default Navbar;
