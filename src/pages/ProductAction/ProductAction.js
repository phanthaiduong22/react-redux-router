import React, { Component } from "react";
import callAPI from "../../utils/apiCaller";
import { Link } from "react-router-dom";

class ProductAction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      txtName: "",
      txtPrice: "",
      checkboxStatus: "",
    };
  }

  componentDidMount() {
    let { match } = this.props;
    if (match) {
      let id = match.params.id;
      this.setState({ id });
      callAPI(`getProduct/${id}`, "GET", null).then((res) => {
        console.log(res.data);
        let { id, name, price, status } = res.data;
        this.setState({
          id,
          txtName: name,
          txtPrice: price,
          checkBoxStatus: status,
        });
      });
    }
  }

  onChange = (e) => {
    let target = e.target;
    let name = target.name;
    let value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };

  onSave = (e) => {
    e.preventDefault();
    let { history } = this.props;
    let { id, txtName, txtPrice, checkboxStatus } = this.state;
    if (id) {
      callAPI(`updateProduct/${id}`, "PUT", {
        name: txtName,
        price: txtPrice,
        status: checkboxStatus,
      }).then((res) => history.goBack());
    } else {
      callAPI("postProduct", "POST", {
        name: txtName,
        price: txtPrice,
        status: checkboxStatus,
      }).then((res) => history.goBack());
    }
  };

  render() {
    let { txtName, txtPrice, checkboxStatus } = this.state;
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <form onSubmit={this.onSave}>
          <div className="form-group">
            <label>Name Product</label>
            <input
              type="text"
              className="form-control"
              name="txtName"
              value={txtName}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Cost</label>
            <input
              type="text"
              className="form-control"
              name="txtPrice"
              value={txtPrice}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Status</label>
          </div>
          <div className="checkbox">
            <label>
              <input
                type="checkbox"
                name="checkboxStatus"
                value={checkboxStatus}
                onChange={this.onChange}
              />
              On Stock
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <Link to="/products" className="mx-2 btn btn-danger">
            Go Back
          </Link>
        </form>
      </div>
    );
  }
}

export default ProductAction;
