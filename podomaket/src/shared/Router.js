import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../components/Main";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import Chat from "../components/Chat";
import Detail from "../components/Detail";
import MyPage from "../components/MyPage";
import MyPageEdit from "../components/MyPageEdit";
import Product from "../components/Product";
import ProductList from "../components/ProductList";
import ProductEdit from "../components/ProductEdit";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/mypage/:id" element={<MyPage />} />
        <Route path="/mypage/edit/:id" element={<MyPageEdit />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/product/list/:id" element={<ProductList />} />
        <Route path="/product/edit/:id" element={<ProductEdit />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
