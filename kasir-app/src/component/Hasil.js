import React, { Component } from "react";
import axios from "axios";
import { numberWithCommas } from "../utils/utils";
import TotalBayar from "./TotalBayar";
import { API_URL } from "../utils/constans";
import { useNavigate } from "react-router-dom";
export default class Hasil extends Component {
  bayar = () => {
    const pesanan = {
      total_bayar: 1200,
      menus: this.props.keranjangs,
    };
    axios.post(API_URL + "pesanans", pesanan).then((res) => {
      window.location.href = "/succes";
    });
  };
  render() {
    const { keranjangs } = this.props;
    // const totalHarga = keranjangs.reduce(function (result, item) {
    //   return result + item.total_harga;
    // }, 0);
    // const hitungTotal = (items) => {
    //   return items.reduce((total, item) => total + item.total_harga, 0);
    // };

    // Menghitung total harga setiap kali data keranjangs berubah
    // const totalHarga = this.hitungTotal(keranjangs);
    return (
      <div className="mx-auto">
        <div class="flex items-start justify-between">
          <h2 class="text-lg font-medium text-gray-900" id="slide-over-title">
            Shopping cart
          </h2>
        </div>
        <div class="mt-8">
          <div class="flow-root">
            <ul role="list" class="my-6 divide-y divide-gray-200">
              {keranjangs &&
                keranjangs.map((keranjang) => (
                  <li class="flex py-6">
                    <div class="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <img
                        src={keranjang.Product.gambar}
                        alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                        class="size-full object-cover"
                      />
                    </div>

                    <div class="ml-4 flex flex-1 flex-col">
                      <div>
                        <div class="flex justify-between text-base font-medium text-gray-900">
                          <h3>
                            <a href="#">{keranjang.Product.nama}</a>
                          </h3>
                          <p class="ml-4">
                            Rp. {numberWithCommas(keranjang.total_harga)}
                          </p>
                        </div>
                        <p class="mt-1 text-lg text-gray-500">jumlah</p>
                      </div>
                      <div class="flex flex-1 items-end justify-between text-lg">
                        <p class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                          {keranjang.jumlah}
                        </p>

                        <div class="flex">
                          <button
                            type="button"
                            class="font-medium text-red-600 hover:text-red-500"
                          >
                            Remove
                            <TotalBayar
                              keranjangs={keranjangs}
                              {...this.props}
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>

        <div class="border-t border-gray-200 px-4 py-6 sm:px-6">
          <div class="flex justify-between text-base font-medium text-gray-900">
            <p>Subtotal</p>
            {/* {numberWithCommas(totalHarga)} */}
          </div>
          <p class="mt-0.5 text-sm text-gray-500">
            Shipping and taxes calculated at checkout.
          </p>
          <div class="mt-6">
            <button
              onClick={() => this.bayar()}
              className="w-full flex items-center justify-center rounded-md border border-transparent bg-gray-900 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-gray-700"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    );
  }
}
