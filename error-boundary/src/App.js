// // import logo from "./logo.svg";
// // import "./App.css";
// // import ProductA from "./ProductA";
// // import ProductB from "./ProductB";
// // import ProductC from "./ProductC";
// // import ErrorBoundary from "./ErrorBoundary";
// import PlayList1 from "./PlayList1";
// import data from "./songs.json";

// function App() {

//   this.state = {
//     products: data.products,
//   };

//   return (
//     <div className="App">
//       {/* <ErrorBoundary>
//         <ProductA name="Rajes" />
//       </ErrorBoundary>
//       <ProductB name="Jlakara" />
//       <ProductC name="Some name" /> */}

//       <PlayList1 />
//     </div>
//   );
// }

// export default App;

import React, { Component } from "react";
import PlayList1 from "./PlayList1";
import data from "./songs.json";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: data.products,
      clicked: false,
    };
  }

  nextSong = (e) => {
    console.log("next Song");
  };
  render() {
    return (
      <div>
        <PlayList1 products={this.state.products} nextSong={this.nextSong} />
      </div>
    );
  }
}

export default App;
