import React, { Component } from "react";

class ProductAction extends Component {
  render() {
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <form>
          <div className="form-group">
            <label>Name Product</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label>Cost</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label>Status</label>
            <input type="text" className="form-control" />
          </div>
          <div className="checkbox">
            <label>
              <input type="checkbox" />
              On Stock
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default ProductAction;
