import React, { Component } from "react";
import { Switch, Route, BrowserRouter, Routes } from "react-router-dom";
import { NavbarComponent } from "./component";
import { Detail, Home, Succes } from "./pages";
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavbarComponent />
        <main>
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/succes" element={<Succes />} exact />
            <Route path="/detail/:productId" element={<Detail />} exact />
          </Routes>
        </main>
      </BrowserRouter>
    );
  }
}
