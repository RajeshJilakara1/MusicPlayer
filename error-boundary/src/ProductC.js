import React, { Component } from "react";

export class ProductC extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>This is Products C Page {this.props.name == "raju"}</h1>
      </div>
    );
  }
}

export default ProductC;
