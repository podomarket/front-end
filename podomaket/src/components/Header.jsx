// 헤더

import React from "react";
import {
  Hamburger,
  LogInOutButton,
  Logo,
  NavBar,
  NavLinks,
} from "../style/header_styled";
export const Header = () => {
  return (
    <NavBar>
      <Logo>PODOMARKET</Logo>
      <Hamburger>
        <div class="bars1"></div>
        <div class="bars2"></div>
        <div class="bars3"></div>
      </Hamburger>
      <NavLinks>
        <li>
          <div>프로필 사진</div>
        </li>
        <li>
          <p>닉네임</p>
        </li>
        <li>
          <a href="#!">마이페이지</a>
        </li>
        <li>
          <LogInOutButton>로그인</LogInOutButton>
        </li>
      </NavLinks>
    </NavBar>
  );
};

export default Header;
