import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import Chat from "../components/Chat";

import MyPageEdit from "../components/MyPageEdit";
import Product from "../components/Product";
import ProductList from "../components/ProductList";
import ProductEdit from "../components/ProductEdit";
import MainPage from "../pages/MainPage";
import Header from "../components/Header";
import GlobalStyles from "../style/GlobalStyles";
import ProductPostPage from "../pages/ProductPostPage";
import MyProfilePage from "../pages/MyProfilePage";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/chat" element={<Chat />} />

        <Route path="/mypage/:id" element={<MyProfilePage />} />
        <Route path="/mypage/edit/:id" element={<MyPageEdit />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/product/post" element={<ProductPostPage />} />
        <Route path="/product/list/:id" element={<ProductList />} />
        <Route path="/product/edit/:id" element={<ProductEdit />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
