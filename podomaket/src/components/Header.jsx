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

export const Header = () => {
  const navigate = useNavigate();
  const tokens = useSelector((state) => state.userSlice.isLogin);

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
          <p>닉네임</p>
        </li>
        <li>
          <a onClick={myPage}>마이페이지</a>
        </li>
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
