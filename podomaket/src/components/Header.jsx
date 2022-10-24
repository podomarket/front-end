// 헤더

import {
  LogInOutButton,
  Logo,
  MyPage,
  NavBar,
  NavLinks,
} from "../style/header_styled";
import { useNavigate } from "react-router-dom";
import { localGet } from "../localStorage";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export const Header = () => {
  const navigate = useNavigate();
  const tokens = useSelector((state) => state.userSlice.isLogin);
  // console.log(tokens);

  const [useToken, setUseToken] = useState(false);

  useEffect(() => {
    setUseToken(!useToken);
  }, [tokens]);

  const toLogin = () => {
    navigate("/users/login");
    if (localGet) {
      return localStorage.removeItem("token");
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
          <div>프로필 사진</div>
        </li>
        <li>
          <p>닉네임</p>
        </li>
        <li>
          <a onClick={myPage}>마이페이지</a>
        </li>
        <li>
          <LogInOutButton onClick={toLogin}>
            {useToken ? "로그아웃" : "로그인"}
          </LogInOutButton>
        </li>
      </NavLinks>
    </NavBar>
  );
};

export default Header;
