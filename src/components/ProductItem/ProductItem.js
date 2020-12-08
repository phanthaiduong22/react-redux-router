import React, { Component } from "react";

class ProductItem extends Component {
  render() {
    let { product, index } = this.props;
    let statusName = product.status ? "On Stock" : "Out Stock";
    let statusClass = product.status ? "warning" : "danger";

    return (
      <tr>
        <td>{index + 1}</td>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td>
          <button type="button" className={`btn btn-${statusClass}`}>
            {statusName}
          </button>
        </td>
        <td>
          <button type="button" className="btn btn-success mr-md-3">
            Edit
          </button>
          <button type="button" className="btn btn-danger">
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default ProductItem;
