import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { faLessThan } from "@fortawesome/free-solid-svg-icons";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";

export class PlayList1 extends Component {
  constructor(props) {
    super(props);
  }

  nextSong = (e) => {
    console.log("next Song");
  };

  preSong = (e) => {
    console.log("PrevSong");
  };

  render() {
    return (
      <div>
        {this.props.products.map((product) => (
          <table className="player">
            <tr>
              <div className="player-two">
                <li key={product._id}>{product.description}</li>
              </div>
            </tr>
            <FontAwesomeIcon onClick={this.preSong} icon={faLessThan} />
            <FontAwesomeIcon icon={faPlayCircle} />
            <FontAwesomeIcon onClick={this.nextSong} icon={faGreaterThan} />
          </table>
        ))}
      </div>
    );
  }
}

export default PlayList1;
