import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../components/Login";
import SignUp from "../components/SignUp";

import Product from "../components/Product";

import ProductEdit from "../components/ProductEdit";
import MainPage from "../pages/MainPage";
import Header from "../components/Header";
import GlobalStyles from "../style/GlobalStyles";
import ProductPostPage from "../pages/ProductPostPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/users/login" element={<Login />} />
        <Route path="/users/signup" element={<SignUp />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/product" element={<ProductPostPage />} />
        <Route path="/product/edit/:id" element={<ProductEdit />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
