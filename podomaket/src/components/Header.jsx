// 헤더

import {
  LogInOutButton,
  Logo,
  MyPage,
  NavBar,
  NavLinks,
} from "../style/header_styled";
import { useNavigate, useParams } from "react-router-dom";
import { localGet } from "../localStorage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { __getUser, __getUsers } from "../features/userSlice";
import { __getProducts } from "../features/podoSlice";
import axios from "axios";

export const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  const [useToken, setUseToken] = useState(false);

  const token = localStorage.getItem("accessToken");

  const toLogin = () => {
    navigate("/users/login");
    if (token) {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
    }
  };

  const main = () => {
    navigate("/");
  };
  const myPage = () => {
    navigate("/mypage/1");
  };

  return (
    <NavBar>
      <Logo onClick={main}>PODOMARKET</Logo>
      <NavLinks>
        <li>
          <LogInOutButton onClick={toLogin}>
            {token ? "로그아웃" : "로그인"}
          </LogInOutButton>
        </li>
      </NavLinks>
    </NavBar>
  );
};

export default Header;
