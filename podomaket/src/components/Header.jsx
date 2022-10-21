// 헤더
import React from "react";
import { LogInOutButton, Logo, NavBar, NavLinks } from "../style/header_styled";
export const Header = () => {
  return (
    <NavBar>
      <Logo>PODOMARKET</Logo>
      <NavLinks>
        <li>
          <div>프로필 사진</div>
        </li>
        <li>
          <p>닉네임</p>
        </li>
        <li>

          <a>마이페이지</a>

        </li>
        <li>
          <LogInOutButton>로그인</LogInOutButton>
        </li>
      </NavLinks>
    </NavBar>
  );
};

export default Header;
