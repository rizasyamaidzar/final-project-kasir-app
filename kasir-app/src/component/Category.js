import React, { Component } from "react";
import axios from "axios";
import { API_URL } from "../utils/constans";

export default class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [], // Menyimpan kategori yang diterima
    };
  }

  componentDidMount() {
    const apiEndpoint = `${API_URL}/category`;
    console.log("Fetching data from:", apiEndpoint);

    axios
      .get(apiEndpoint)
      .then((res) => {
        const categories = res.data.data;
        this.setState({ categories });
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }

  render() {
    const { categories } = this.state;
    const { changeCategory, categoryChoice } = this.props;
    return (
      <div className="mx-auto">
        <div class="fixed bottom-0 z-20 w-full -translate-x-1/2 bg-white border-t border-gray-200 left-1/2 dark:bg-gray-700 dark:border-gray-600">
          <div class="w-full">
            <div
              class="grid max-w-lg h-10 grid-cols-3 gap-5 p-1 mx-auto my-2 bg-gray-100 rounded-lg dark:bg-gray-600"
              role="group"
            >
              {categories &&
                categories.map((category) => (
                  <button
                    type="button"
                    class={`px-5 py-1.5 text-xl font-medium text-white bg-gray-900 dark:bg-gray-300 dark:text-gray-900 rounded-lg ${
                      changeCategory === category.nama
                        ? "text-blue-700 ring-blue-700"
                        : ""
                    }`}
                    key={category.id}
                    onClick={() => changeCategory(category.nama)}
                  >
                    {category.nama}
                  </button>
                ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
