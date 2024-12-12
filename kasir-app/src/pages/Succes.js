import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../utils/constans";
export default class Succes extends Component {
  componentDidMount() {
    axios
      .get(API_URL + "keranjangs")
      .then((res) => {
        const keranjangs = res.data;
        keranjangs.map(function (item) {
          return axios
            .delete(API_URL + "keranjangs/" + item.id)
            .then((res) => console.log(res))
            .catch((error) => console.log(error));
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        <div class="bg-gray-100">
          <div class="min-h-screen flex flex-col justify-center items-center">
            <img
              src="https://www.svgrepo.com/show/521408/smiling-face-with-heart-eyes.svg"
              alt="Logo"
              class="mb-8 h-40"
            />
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-700 mb-4">
              Sukses Pesan!
            </h1>
            <p class="text-center text-gray-500 text-lg md:text-xl lg:text-2xl mb-8">
              Terimakasih telah order, Selamat Makann!
            </p>
            <Link
              className="bg-green-500 rounded-md p-5 px-10 text-white font-bold text-xl"
              to="/"
            >
              Back
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
