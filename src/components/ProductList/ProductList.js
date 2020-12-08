import React, { Component } from "react";
import ProductItem from "../ProductItem/ProductItem";

class ProductList extends Component {
  render() {
    return (
      <div class="panel panel-primary">
        <div class="panel-heading">
          <h3 class="panel-title">List product</h3>
        </div>
        <div class="panel-body">
          <div>
            <table className="table table-bordered table-hover">
              <thead>
                <tr>
                  <th>Number</th>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Cost</th>
                  <th>Status</th>
                  <th>Active</th>
                </tr>
              </thead>
              <tbody>{this.props.children}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductList;
