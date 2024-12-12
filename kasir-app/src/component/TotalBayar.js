import React, { Component } from "react";
import { numberWithCommas } from "../utils/utils";

export default class TotalBayar extends Component {
  render() {
    const total = this.props.keranjangs.reduce(function (result, item) {
      return result + item.total_harga;
    }, 0);
    return (
      <div>
        <p>Rp. {numberWithCommas(total)}</p>
      </div>
    );
  }
}
