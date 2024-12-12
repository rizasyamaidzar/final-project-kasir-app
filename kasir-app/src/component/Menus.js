import React from "react";
import { numberWithCommas } from "../utils/utils";
import Alert from "./Alert";
import { Link } from "react-router-dom";
const Menus = ({ menu, addKeranjang, viewDetail }) => {
  return (
    <div class="w-full mx-auto grid grid-cols-1 lg:grid-cols-1 md:grid-cols-4 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
      <div class="w-full bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        <a href="#">
          <img
            src={menu.gambar}
            alt="Product"
            class="h-80 w-full object-cover rounded-t-xl"
          />
          <div class="px-4 py-3 w-full">
            <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span>
            <p class="text-lg font-bold text-black truncate block capitalize">
              {menu.nama}
            </p>
            <div class="flex items-center">
              <p class="text-lg font-semibold text-black cursor-auto my-3">
                Rp.{numberWithCommas(menu.harga)}
              </p>
              <del>
                <p class="text-sm text-gray-600 cursor-auto ml-2">$199</p>
              </del>
              <div class="ml-auto">
                <button
                  data-modal-target="popup-modal"
                  data-modal-toggle="popup-modal"
                  class="hover:text-blue-900"
                  type="button"
                  onClick={() => addKeranjang(menu)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    fill="currentColor"
                    class="bi bi-bag-plus"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                    />
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                  </svg>
                </button>
              </div>
            </div>
            <Link
              className="w-full text-xl px-10 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600"
              to={`/detail/${menu.id}`}
              key={menu.id}
            >
              View
            </Link>
          </div>
        </a>
      </div>
    </div>
  );
};
export default Menus;
