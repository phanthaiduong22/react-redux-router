import React, { Component } from "react";

class Menu extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-light bg-light">
          <div className="nav navbar-nav">
            <a className="nav-item nav-link active" href="/">
              Home <span className="sr-only">(current)</span>
            </a>
            <a className="nav-item nav-link" href="/products">
              Products
            </a>
          </div>
        </nav>
      </div>
    );
  }
}

export default Menu;
