import * as React from "react";

import MainPage from "./MainPage/MainPage";
import { Route, Routes } from "react-router-dom";
import Catalog from "./Catalog/Catalog";
import BasketContainer from "./Basket/BasketContainer";
const Body = () => {
  return (
    <Routes>
      <Route path={"/"} element={<MainPage />}></Route>
      <Route path={"/sigaret"} element={<Catalog />}></Route>
      <Route path={"/basket"} element={<BasketContainer />} />
    </Routes>
  );
};

export default Body;
