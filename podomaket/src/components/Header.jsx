// 헤더
import React from "react";
import {
  LogInOutButton,
  Logo,
  MyPage,
  NavBar,
  NavLinks,
} from "../style/header_styled";
import { useNavigate } from "react-router-dom";
export const Header = () => {
  const navigate = useNavigate();

  const toLogin = () => {
    navigate("/login");
  };
  const main = () => {
    navigate("/");
  };
  const myPage = () => {
    navigate("/MyPage/1");
  };
  return (
    <NavBar>
      <Logo onClick={main}>PODOMARKET</Logo>
      <NavLinks>
        <li>
          <div>프로필 사진</div>
        </li>
        <li>
          <p>닉네임</p>
        </li>
        <li>
          <a onClick={myPage}>마이페이지</a>
        </li>
        <li>
          <LogInOutButton onClick={toLogin}>로그인</LogInOutButton>
        </li>
      </NavLinks>
    </NavBar>
  );
};

export default Header;
