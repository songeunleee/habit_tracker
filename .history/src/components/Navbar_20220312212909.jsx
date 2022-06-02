import React, { PureComponent } from "react";

class Navbar extends PureComponent {
  render() {
    console.log("navbar");
    return (
      <div className="navbar">
        <i className="navbar-logo fas fa-leaf"></i>
        <span>Habbit Tracker</span>
        <span className="navbar-count">{this.props.TotalCount}</span>
      </div>
    );
  }
}

export default Navbar;
