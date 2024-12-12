import logo from "../logo.svg";
// import "./App.css";
import { API_URL } from "../utils/constans";
import axios from "axios";
import {
  DaftarProduk,
  Hasil,
  ListCategories,
  Menus,
  Category,
} from "../component";
import Alert from "../component/Alert";
import React, { Component } from "react";
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menus: [],
      choice: "Makanan",
    };
  }

  componentDidMount() {
    axios
      .get(API_URL + "products?category=Minuman")
      .then((res) => {
        const menus = res.data.data;
        this.setState({ menus });
      })
      .catch((error) => {
        console.log("ini eror menu :");
        console.log(error);
      });
    // tampilkan keranjang
    this.getListCart();
  }
  // untuk reload keranjang
  //   componentDidUpdate(prevState) {
  //     if (this.state.keranjangs !== prevState.keranjangs) {
  //       axios
  //         .get(API_URL + "keranjangs")
  //         .then((res) => {
  //           const keranjangs = res.data;
  //           this.setState({ keranjangs });
  //         })
  //         .catch((error) => {
  //           console.log(error);
  //         });
  //     }
  //   }

  getListCart = () => {
    axios
      .get(API_URL + "cart")
      .then((res) => {
        const keranjangs = res.data.data;
        this.setState({ keranjangs });
        console.log("apakah data sudah ada", keranjangs);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  changeCategory = (value) => {
    this.setState({
      choice: value,
      menus: [],
    });
    axios
      .get(API_URL + "products?category=" + value)
      .then((res) => {
        const menus = res.data.data;
        this.setState({ menus });
        console.log(Array.isArray(menus));
        console.log("ini sedang pusing", menus);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  addKeranjang = (value) => {
    // get keranjang id
    axios
      .get(API_URL + "cart", { params: { productId: value.id } })
      .then((res) => {
        console.log("data kosong", res.data.data.length);
        if (res.data.data === 0) {
          const cart = {
            jumlah: 1,
            total_harga: value.harga,
            productId: value.id,
          };
          axios
            .post(API_URL + "cart", cart, {
              headers: {
                "Content-Type": "application/json",
              },
            })
            .then((res) => {
              console.log(res.data); // Tampilkan respons dari server
              this.getListCart();
            })
            .catch((error) => {
              console.error(error.response.data); // Tampilkan error yang lebih jelas
            });
        } else {
          const keranjang = {
            jumlah: res.data.data[0].jumlah + 1,
            total_harga:
              res.data.data[0].total_harga + res.data.data[0].total_harga,
          };
          axios
            .put(API_URL + "cart/" + res.data.data[0].id, keranjang, {
              headers: {
                "Content-Type": "application/json",
              },
            })
            .then((res) => {
              this.getListCart();
            })
            .catch((error) => {
              console.log(error);
            });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    const { menus, choice, keranjangs } = this.state;
    return (
      <div className="App">
        <div class="grid grid-rows-1 grid-flow-col gap-4 mx-10 my-20">
          <Category changeCategory={this.changeCategory} choice={choice} />

          <div class="grid grid-rows-6 grid-flow-col gap-2 mx-5">
            {Array.isArray(menus) &&
              menus.map((menu) => (
                <Menus
                  key={menu.id}
                  menu={menu}
                  addKeranjang={this.addKeranjang}
                />
              ))}
          </div>
          <Hasil keranjangs={keranjangs} {...this.props} />
          {/* <Hasil {...this.props} /> */}
        </div>
      </div>
    );
  }
}