import React, { Component } from "react";

export class ProductB extends Component {
  render() {
    return (
      <div>
        <h1>This is PRoduct B Page {this.props.name}</h1>
      </div>
    );
  }
}

export default ProductB;
