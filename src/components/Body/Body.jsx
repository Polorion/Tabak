import * as React from "react";

import MainPage from "./MainPage/MainPage";
import { Route, Routes } from "react-router-dom";
import Catalog from "./Catalog/Catalog";
import BasketContainer from "./Basket/BasketContainer";
import CompareContainer from "./Compare/CompareContainer";
const Body = () => {
  return (
    <Routes>
      <Route path={"/"} element={<MainPage />}></Route>
      <Route path={"/sigaret"} element={<Catalog />}></Route>
      <Route path={"/compare"} element={<CompareContainer />}></Route>
      <Route path={"/basket"} element={<BasketContainer />} />
    </Routes>
  );
};

export default Body;
