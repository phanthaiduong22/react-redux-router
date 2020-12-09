import React, { Component } from "react";
import ProductList from "../../components/ProductList/ProductList";
import ProductItem from "../../components/ProductItem/ProductItem";
import { connect } from "react-redux";
import callAPI from "../../utils/apiCaller";
import { Link } from "react-router-dom";
class ProductListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }
  componentDidMount() {
    callAPI("products", null, null).then((res) => {
      this.setState({
        products: res.data,
      });
    });
  }
  render() {
    // let {products} = this.props;
    let products = this.state.products;

    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg">
        {/* <button type="button" className="btn btn-info"> */}
        <Link className="btn btn-info" to="/products/add">
          Add Product
        </Link>
        {/* </button> */}
        <ProductList>{this.showProducts(products)}</ProductList>
      </div>
    );
  }

  onDelete = (id) => {
    callAPI(`deleteProduct/${id}`, "DELETE", null).then((res) => {
      if (res.status === 200) {
        let { products } = this.state;

        let index = this.findProductIndex(products, id);
        products.splice(index, 1);
        this.setState({ products });
      }
    });
  };

  findProductIndex = (products, id) => {
    let result = -1;
    products.forEach((product, index) => {
      if (product.id === id) result = index;
    });
    return result;
  };

  showProducts = (products) => {
    let result = null;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return (
          <ProductItem
            key={index}
            product={product}
            index={index}
            onDelete={(id) => this.onDelete(id)}
          />
        );
      });
    }
    return result;
  };
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

export default connect(mapStateToProps, null)(ProductListPage);
